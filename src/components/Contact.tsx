import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow font-montserrat mb-3">Kontakt</h2>
          <div className="h-1 w-20 bg-yellow mx-auto"></div>
          <p className="text-gray-light font-roboto mt-6 max-w-2xl mx-auto">
            Masz pytania lub chcesz rozpocząć współpracę? Skontaktuj się ze mną, 
            a odpowiem najszybciej jak to możliwe.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-black-light p-8 rounded-lg shadow-lg h-full border border-gray-800">
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">Informacje Kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-yellow mr-4 bg-yellow bg-opacity-10 p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-montserrat font-medium mb-1">Telefon</h4>
                    <p className="text-gray-light font-roboto">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow mr-4 bg-yellow bg-opacity-10 p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-montserrat font-medium mb-1">Email</h4>
                    <p className="text-gray-light font-roboto">kontakt@doriansuliski.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-yellow mr-4 bg-yellow bg-opacity-10 p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-montserrat font-medium mb-1">Lokalizacja</h4>
                    <p className="text-gray-light font-roboto">Warszawa, Polska</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-montserrat font-medium mb-4">Znajdź mnie</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-yellow text-black p-2 rounded-full hover:bg-yellow-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="bg-yellow text-black p-2 rounded-full hover:bg-yellow-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="bg-yellow text-black p-2 rounded-full hover:bg-yellow-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="bg-yellow text-black p-2 rounded-full hover:bg-yellow-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-black-light p-8 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-2xl font-montserrat font-semibold text-white mb-6">Wyślij Wiadomość</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-montserrat mb-2">Imię i Nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow"
                    placeholder="Twoje imię i nazwisko"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-montserrat mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow"
                    placeholder="Twój adres email"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-montserrat mb-2">Temat</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow"
                  placeholder="Temat wiadomości"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-montserrat mb-2">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-yellow resize-none"
                  placeholder="Treść wiadomości"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-yellow text-black font-montserrat font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-dark transform hover:scale-105'}`}
              >
                {isSubmitting ? (
                  <span>Wysyłanie...</span>
                ) : (
                  <>
                    <span>Wyślij Wiadomość</span>
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 bg-green-900 bg-opacity-20 text-green-500 p-3 rounded-md">
                  Wiadomość została wysłana! Skontaktuję się jak najszybciej.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 bg-red-900 bg-opacity-20 text-red-500 p-3 rounded-md">
                  Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
