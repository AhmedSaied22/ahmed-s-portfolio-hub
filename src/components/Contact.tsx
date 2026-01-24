import { useState } from 'react';
import { MessageCircle, Mail, Github, Linkedin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const contactLinks = [
  {
    icon: MessageCircle,
    labelKey: 'common.whatsapp',
    value: '+20 122 964 9437',
    href: 'https://api.whatsapp.com/send/?phone=201229649437&text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20services',
  },
  {
    icon: Mail,
    labelKey: 'common.email',
    value: 'ahmedsaied2019201@gmail.com',
    href: 'mailto:ahmedsaied2019201@gmail.com',
  },
  {
    icon: Linkedin,
    labelKey: 'common.linkedin',
    value: 'ahmed-saieed',
    href: 'https://www.linkedin.com/in/ahmed-saieed/',
  },
  {
    icon: Github,
    labelKey: 'common.github',
    value: 'AhmedSaied22',
    href: 'https://github.com/AhmedSaied22',
  },
];

// ============================================================
// WEB3FORMS INTEGRATION
// To make the contact form work:
// 1. Go to https://web3forms.com/ and sign up (free)
// 2. Create an access key for your email: ahmedsaied2019201@gmail.com
// 3. Replace the placeholder below with your actual access key
// ============================================================
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

export const Contact = () => {
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      
      // Check honeypot - if filled, it's a bot
      const honeypot = formDataToSend.get('botcheck');
      if (honeypot) {
        // Silently reject spam
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        toast({
          title: t('contact.success'),
          description: t('contact.successDesc'),
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: t('contact.error'),
        description: t('contact.errorDesc'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-center text-primary font-medium mb-8">
          {t('contact.subtitle')}
        </p>

        {/* WhatsApp CTA */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <p className={`text-foreground font-medium mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t('contact.preferWhatsApp')}
            </p>
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover gap-2"
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=201229649437&text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.chatNow')}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Links */}
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold text-foreground mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t('contact.letsConnect')}
            </h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <p className="text-sm text-muted-foreground">{t(link.labelKey)}</p>
                    <p className="font-medium text-foreground">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-xl font-semibold text-foreground mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t('contact.sendMessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden fields for Web3Forms */}
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Contact Form Submission - Portfolio" />
              <input type="hidden" name="from_name" value="Ahmed Saied Portfolio" />
              
              {/* Honeypot anti-spam field - hidden from users */}
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={`rounded-xl ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={`rounded-xl ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className={`rounded-xl resize-none ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className={`flex items-center gap-2 text-sm text-primary ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle2 className="w-4 h-4" />
                  {t('contact.successDesc')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className={`flex items-center gap-2 text-sm text-destructive ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <AlertCircle className="w-4 h-4" />
                  {t('contact.errorDesc')}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover gap-2"
              >
                {isSubmitting ? (
                  t('contact.sending')
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
