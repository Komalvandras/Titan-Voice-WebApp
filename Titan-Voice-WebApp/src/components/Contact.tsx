import { Component, createSignal, Show } from 'solid-js';
// Corrected the import path for the icons
import { FaSolidPhone, FaSolidMarker, FaSolidGlobe } from 'solid-icons/fa';

const Contact: Component = () => {
  // State signals remain the same
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

  // --- 1. Updated Validation Logic ---
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
    // Validation for 'Subject' is removed as requested.
    if (!message().trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (validate()) {
      alert('Thank you for your message!');
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
                {/* No error message for subject */}
              </div>
              <div>
                <textarea placeholder="Message" value={message()} onInput={(e) => setMessage(e.currentTarget.value)}
                  rows="5" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-black placeholder:text-gray-500" />
                <Show when={errors().message}><p class="text-red-500 text-sm mt-1">{errors().message}</p></Show>
              </div>

              {/* --- 2. Restyled Checkbox Section --- */}
              <div class="pt-2">
                <label for="sms-consent" class="flex items-start gap-4 p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" id="sms-consent" checked={smsConsent()} onChange={(e) => setSmsConsent(e.currentTarget.checked)} class="mt-1 h-4 w-4 shrink-0" />
                  <span class="text-xs text-slate-500">
                    By signing up for texts, you consent to receive SMS or MMS messages from Teklink. Consent is not a condition of purchase. Message and data rates may apply. I acknowledge that I have read and agree to the <a href="#" class="text-blue-600 hover:underline">SMS Terms and Conditions</a> which includes our <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              <div class="pt-4">
                <button type="submit" class="w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300 text-lg">
                  SEND
                </button>
              </div>
            </form>
          </div>

          <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
            <h3 class="text-3xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
              Contact Us
            </h3>
            <ul class="space-y-6 text-lg text-slate-700">
              <li class="flex items-center gap-4">
                <FaSolidPhone size={20} class="text-blue-600" />
                <span>877-387-6002</span>
              </li>
              <li class="flex items-start gap-4">
                <FaSolidMarker size={20} class="text-blue-600 mt-1" />
                <span>
                  PO Box No 110002<br />
                  Brooklyn NY, USA - 11211
                </span>
              </li>
              <li class="flex items-center gap-4">
                <FaSolidGlobe size={20} class="text-blue-600" />
                <a href="#" class="hover:underline text-blue-600">
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