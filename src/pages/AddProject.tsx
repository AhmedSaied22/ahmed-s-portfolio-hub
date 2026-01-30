// Admin page to add new projects to Firestore easily
// Navigate to /add-project to use this

import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Project } from '@/data/projects';

export default function AddProject() {
    const [status, setStatus] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Pre-filled with the Magento Automation project
    const [formData, setFormData] = useState({
        id: 'magento-automation',
        order: 8,
        category: 'practice' as 'featured' | 'practice',

        titleEn: 'E-commerce Automation Testing',
        titleAr: 'اختبار أتمتة التجارة الإلكترونية',

        descriptionEn: 'Selenium automation framework for testing e-commerce flows including search, cart, and checkout functionality.',
        descriptionAr: 'إطار أتمتة Selenium لاختبار تدفقات التجارة الإلكترونية بما في ذلك البحث وسلة التسوق وعملية الشراء.',

        techTags: 'Java, Selenium, TestNG, Maven, Page Object Model',
        images: '/projects/magento.png',

        githubUrl: 'https://github.com/AhmedSaied22/sprintsAutomationTask',
        googlePlayUrl: '',
        appStoreUrl: '',

        badgeEn: 'Practice / Task',
        badgeAr: 'تدريب / مهمة',

        highlightsEn: `Page Object Model (POM)
Search & Cart Tests
Checkout Flow Tests
TestNG Reports
Bug Reporting
Security Testing (XSS, SQL Injection)`,
        highlightsAr: `نموذج كائن الصفحة (POM)
اختبارات البحث والسلة
اختبارات تدفق الشراء
تقارير TestNG
تقارير الأخطاء
اختبار الأمان (XSS، حقن SQL)`,

        problemEn: 'Manual testing of e-commerce flows is time-consuming and error-prone, requiring automated coverage for critical user journeys.',
        problemAr: 'الاختبار اليدوي لتدفقات التجارة الإلكترونية يستغرق وقتاً طويلاً وعرضة للأخطاء، ويتطلب تغطية آلية للرحلات الحرجة للمستخدم.',

        roleEn: 'QA Automation Engineer responsible for designing test framework, writing automated tests, and documenting bugs.',
        roleAr: 'مهندس أتمتة ضمان الجودة مسؤول عن تصميم إطار الاختبار وكتابة الاختبارات الآلية وتوثيق الأخطاء.',

        challengeEn: 'Creating a maintainable automation framework that covers search, cart, and checkout functionality with clear reporting.',
        challengeAr: 'إنشاء إطار أتمتة قابل للصيانة يغطي وظائف البحث والسلة والشراء مع تقارير واضحة.',

        solutionEn: 'Built a Selenium framework using Page Object Model with TestNG for test execution, including screenshot capture and detailed test reports.',
        solutionAr: 'بناء إطار Selenium باستخدام نموذج كائن الصفحة مع TestNG لتنفيذ الاختبارات، بما في ذلك التقاط الشاشة وتقارير الاختبار المفصلة.',

        resultsEn: `Automated 8+ test cases covering critical flows
Implemented bug reporting with screenshots
Performed basic security testing`,
        resultsAr: `أتمتة أكثر من 8 حالات اختبار تغطي التدفقات الحرجة
تنفيذ تقارير الأخطاء مع لقطات الشاشة
إجراء اختبار أمان أساسي`,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            // Build the project object - only include fields that have values
            const projectData: Record<string, unknown> = {
                id: formData.id,
                order: formData.order,
                category: formData.category,
                title: { en: formData.titleEn, ar: formData.titleAr },
                description: { en: formData.descriptionEn, ar: formData.descriptionAr },
                techTags: formData.techTags.split(',').map(t => t.trim()),
                images: formData.images.split(',').map(t => t.trim()),
                highlights: {
                    en: formData.highlightsEn.split('\n').map(t => t.trim()).filter(Boolean),
                    ar: formData.highlightsAr.split('\n').map(t => t.trim()).filter(Boolean),
                },
                caseStudy: {
                    problem: { en: formData.problemEn, ar: formData.problemAr },
                    role: { en: formData.roleEn, ar: formData.roleAr },
                    challenge: { en: formData.challengeEn, ar: formData.challengeAr },
                    solution: { en: formData.solutionEn, ar: formData.solutionAr },
                    results: {
                        en: formData.resultsEn.split('\n').map(t => t.trim()).filter(Boolean),
                        ar: formData.resultsAr.split('\n').map(t => t.trim()).filter(Boolean),
                    },
                },
            };

            // Only add optional fields if they have values
            if (formData.badgeEn) {
                projectData.badge = { en: formData.badgeEn, ar: formData.badgeAr };
            }
            if (formData.githubUrl) {
                projectData.githubUrl = formData.githubUrl;
            }
            if (formData.googlePlayUrl) {
                projectData.googlePlayUrl = formData.googlePlayUrl;
            }
            if (formData.appStoreUrl) {
                projectData.appStoreUrl = formData.appStoreUrl;
            }

            const projectRef = doc(collection(db, 'projects'), formData.id);
            await setDoc(projectRef, projectData);

            setStatus('✅ Project added successfully! Refresh your portfolio to see it.');
        } catch (error) {
            setStatus(`❌ Error: ${error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '8px',
        border: '1px solid #333',
        backgroundColor: '#1a1a2e',
        color: '#eee',
        fontSize: '14px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold' as const,
        color: '#4ade80',
    };

    const sectionStyle = {
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#0f0f1a',
        borderRadius: '8px',
    };

    return (
        <div style={{
            padding: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
            fontFamily: 'system-ui, sans-serif',
            backgroundColor: '#1a1a2e',
            minHeight: '100vh',
            color: '#eee'
        }}>
            <h1 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>➕ Add New Project</h1>
            <p style={{ color: '#999', marginBottom: '2rem' }}>Fill in the form and click Submit to add to Firestore</p>

            {status && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: status.includes('✅') ? '#065f46' : '#7f1d1d',
                    borderRadius: '8px',
                    marginBottom: '1.5rem'
                }}>
                    {status}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Basic Info */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>📋 Basic Info</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>ID (slug)</label>
                            <input
                                style={inputStyle}
                                value={formData.id}
                                onChange={e => setFormData({ ...formData, id: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Order</label>
                            <input
                                type="number"
                                style={inputStyle}
                                value={formData.order}
                                onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) })}
                                required
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Category</label>
                            <select
                                style={inputStyle}
                                value={formData.category}
                                onChange={e => setFormData({ ...formData, category: e.target.value as 'featured' | 'practice' })}
                            >
                                <option value="featured">Featured</option>
                                <option value="practice">Practice</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>🏷️ Title</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>English</label>
                            <input
                                style={inputStyle}
                                value={formData.titleEn}
                                onChange={e => setFormData({ ...formData, titleEn: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Arabic</label>
                            <input
                                style={inputStyle}
                                value={formData.titleAr}
                                onChange={e => setFormData({ ...formData, titleAr: e.target.value })}
                                dir="rtl"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>📝 Description</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>English</label>
                            <textarea
                                style={{ ...inputStyle, minHeight: '80px' }}
                                value={formData.descriptionEn}
                                onChange={e => setFormData({ ...formData, descriptionEn: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Arabic</label>
                            <textarea
                                style={{ ...inputStyle, minHeight: '80px' }}
                                value={formData.descriptionAr}
                                onChange={e => setFormData({ ...formData, descriptionAr: e.target.value })}
                                dir="rtl"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Tech & Images */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>🔧 Tech & Images</h3>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={labelStyle}>Tech Tags (comma separated)</label>
                        <input
                            style={inputStyle}
                            value={formData.techTags}
                            onChange={e => setFormData({ ...formData, techTags: e.target.value })}
                            placeholder="Java, Selenium, TestNG"
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Images (comma separated paths)</label>
                        <input
                            style={inputStyle}
                            value={formData.images}
                            onChange={e => setFormData({ ...formData, images: e.target.value })}
                            placeholder="/projects/image1.png, /projects/image2.jpg"
                            required
                        />
                    </div>
                </div>

                {/* Links */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>🔗 Links</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>GitHub URL</label>
                            <input
                                style={inputStyle}
                                value={formData.githubUrl}
                                onChange={e => setFormData({ ...formData, githubUrl: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Google Play URL</label>
                            <input
                                style={inputStyle}
                                value={formData.googlePlayUrl}
                                onChange={e => setFormData({ ...formData, googlePlayUrl: e.target.value })}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>App Store URL</label>
                            <input
                                style={inputStyle}
                                value={formData.appStoreUrl}
                                onChange={e => setFormData({ ...formData, appStoreUrl: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                {/* Badge */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>🏅 Badge (optional)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>English</label>
                            <input
                                style={inputStyle}
                                value={formData.badgeEn}
                                onChange={e => setFormData({ ...formData, badgeEn: e.target.value })}
                                placeholder="Practice / Task"
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Arabic</label>
                            <input
                                style={inputStyle}
                                value={formData.badgeAr}
                                onChange={e => setFormData({ ...formData, badgeAr: e.target.value })}
                                dir="rtl"
                                placeholder="تدريب / مهمة"
                            />
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>✨ Highlights (one per line)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>English</label>
                            <textarea
                                style={{ ...inputStyle, minHeight: '120px' }}
                                value={formData.highlightsEn}
                                onChange={e => setFormData({ ...formData, highlightsEn: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Arabic</label>
                            <textarea
                                style={{ ...inputStyle, minHeight: '120px' }}
                                value={formData.highlightsAr}
                                onChange={e => setFormData({ ...formData, highlightsAr: e.target.value })}
                                dir="rtl"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Case Study */}
                <div style={sectionStyle}>
                    <h3 style={{ color: '#4ade80', marginTop: 0 }}>📖 Case Study</h3>

                    <p style={{ color: '#999', marginBottom: '1rem' }}>Problem</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.problemEn}
                            onChange={e => setFormData({ ...formData, problemEn: e.target.value })}
                            placeholder="Problem (English)"
                            required
                        />
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.problemAr}
                            onChange={e => setFormData({ ...formData, problemAr: e.target.value })}
                            placeholder="Problem (Arabic)"
                            dir="rtl"
                            required
                        />
                    </div>

                    <p style={{ color: '#999', marginBottom: '1rem' }}>My Role</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.roleEn}
                            onChange={e => setFormData({ ...formData, roleEn: e.target.value })}
                            placeholder="Role (English)"
                            required
                        />
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.roleAr}
                            onChange={e => setFormData({ ...formData, roleAr: e.target.value })}
                            placeholder="Role (Arabic)"
                            dir="rtl"
                            required
                        />
                    </div>

                    <p style={{ color: '#999', marginBottom: '1rem' }}>Challenge</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.challengeEn}
                            onChange={e => setFormData({ ...formData, challengeEn: e.target.value })}
                            placeholder="Challenge (English)"
                            required
                        />
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.challengeAr}
                            onChange={e => setFormData({ ...formData, challengeAr: e.target.value })}
                            placeholder="Challenge (Arabic)"
                            dir="rtl"
                            required
                        />
                    </div>

                    <p style={{ color: '#999', marginBottom: '1rem' }}>Solution</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.solutionEn}
                            onChange={e => setFormData({ ...formData, solutionEn: e.target.value })}
                            placeholder="Solution (English)"
                            required
                        />
                        <textarea
                            style={{ ...inputStyle, minHeight: '60px' }}
                            value={formData.solutionAr}
                            onChange={e => setFormData({ ...formData, solutionAr: e.target.value })}
                            placeholder="Solution (Arabic)"
                            dir="rtl"
                            required
                        />
                    </div>

                    <p style={{ color: '#999', marginBottom: '1rem' }}>Results (one per line)</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <textarea
                            style={{ ...inputStyle, minHeight: '80px' }}
                            value={formData.resultsEn}
                            onChange={e => setFormData({ ...formData, resultsEn: e.target.value })}
                            placeholder="Result 1&#10;Result 2&#10;Result 3"
                            required
                        />
                        <textarea
                            style={{ ...inputStyle, minHeight: '80px' }}
                            value={formData.resultsAr}
                            onChange={e => setFormData({ ...formData, resultsAr: e.target.value })}
                            placeholder="نتيجة 1&#10;نتيجة 2&#10;نتيجة 3"
                            dir="rtl"
                            required
                        />
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        fontSize: '1.1rem',
                        backgroundColor: isSubmitting ? '#666' : '#4ade80',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    {isSubmitting ? '⏳ Adding Project...' : '🚀 Add Project to Firestore'}
                </button>
            </form>

            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#0f0f1a', borderRadius: '8px' }}>
                <p style={{ color: '#999', margin: 0 }}>
                    💡 <strong>Tip:</strong> After adding, go to your portfolio and refresh to see the new project!
                </p>
            </div>
        </div>
    );
}
