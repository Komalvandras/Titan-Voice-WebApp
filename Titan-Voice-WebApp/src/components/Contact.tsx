import { createSignal, Show } from 'solid-js';
import { FaSolidPhone, FaSolidMarker, FaSolidGlobe } from 'solid-icons/fa';

const Contact = () => {
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [subject, setSubject] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [smsConsent, setSmsConsent] = createSignal(false);
  const [errors, setErrors] = createSignal({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });
  const [formStatus, setFormStatus] = createSignal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
    let isValid = true;

    if (!firstName().trim()) {
      newErrors.firstName = 'First name is required.';
      isValid = false;
    }
    if (!lastName().trim()) {
      newErrors.lastName = 'Last name is required.';
      isValid = false;
    }
    if (!email().trim()) {
      newErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email())) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!phone().trim()) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    }
    if (!message().trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setFormStatus('submitting');
    const formData = {
      from_name: `${firstName()} ${lastName()}`,
      email: email(),
      phone: phone(),
      subject: subject(),
      message: message(),
    };

    try {
      const response = await fetch('/api/send-contact', { // Updated URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" class="py-24 bg-slate-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center gap-12">
          <div class="w-full max-w-4xl bg-white p-8 sm:p-12 rounded-xl shadow-2xl">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
              Ready to Discover Your Ultimate Telecom Link?
            </h2>
            <Show when={formStatus() === 'success'} fallback={
              <>
                <form onSubmit={handleSubmit} class="space-y-6">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input type="text" placeholder="First Name" value={firstName()} onInput={(e) => setFirstName(e.currentTarget.value)}
                        class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                      <Show when={errors().firstName}><p class="text-red-500 text-sm mt-1">{errors().firstName}</p></Show>
                    </div>
                    <div>
                      <input type="text" placeholder="Last Name" value={lastName()} onInput={(e) => setLastName(e.currentTarget.value)}
                        class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                      <Show when={errors().lastName}><p class="text-red-500 text-sm mt-1">{errors().lastName}</p></Show>
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address" value={email()} onInput={(e) => setEmail(e.currentTarget.value)}
                        class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                      <Show when={errors().email}><p class="text-red-500 text-sm mt-1">{errors().email}</p></Show>
                    </div>
                    <div>
                      <input type="tel" placeholder="Telephone" value={phone()} onInput={(e) => setPhone(e.currentTarget.value)}
                        class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                      <Show when={errors().phone}><p class="text-red-500 text-sm mt-1">{errors().phone}</p></Show>
                    </div>
                  </div>
                  <div>
                    <input type="text" placeholder="Subject" value={subject()} onInput={(e) => setSubject(e.currentTarget.value)}
                      class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                  </div>
                  <div>
                    <textarea placeholder="Message" value={message()} onInput={(e) => setMessage(e.currentTarget.value)}
                      rows="5" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                    <Show when={errors().message}><p class="text-red-500 text-sm mt-1">{errors().message}</p></Show>
                  </div>
                  <div class="pt-4">
                    <button type="submit" class="w-full bg-titan-blue text-white font-bold py-4 px-6 rounded-md hover:bg-titan-blue-dark transition-colors duration-300 text-lg" disabled={formStatus() === 'submitting'}>
                      {formStatus() === 'submitting' ? 'Sending...' : 'SEND'}
                    </button>
                  </div>
                </form>
                <Show when={formStatus() === 'error'}>
                  <p class="text-red-500 text-center mt-4">Oops! Something went wrong. Please try again.</p>
                </Show>
              </>
            }>
              <div class="text-center p-8 bg-green-50 rounded-lg">
                <h3 class="text-2xl font-bold text-green-800">Message Sent!</h3>
                <p class="text-green-700 mt-2">Thank you for your message. We'll be in touch soon.</p>
              </div>
            </Show>
          </div>

          <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
            <h3 class="text-3xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
              Contact Us
            </h3>
            <ul class="space-y-6 text-lg text-slate-700">
              <li class="flex items-center gap-4">
                <FaSolidPhone size={20} class="text-titan-blue" />
                <span>469.643.4000</span>
              </li>
              <li class="flex items-start gap-4">
                <FaSolidMarker size={20} class="text-titan-blue mt-1" />
                <span>
                  450 Century Pkwy Ste 250,<br />
                  Allen, RX 75013
                </span>
              </li>
              <li class="flex items-center gap-4">
                <FaSolidGlobe size={20} class="text-titan-blue" />
                <a href="#" class="hover:underline text-titan-blue">
                  www.yourwebsite.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
