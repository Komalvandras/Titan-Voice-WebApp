// src/components/QuoteForm.tsx

import { createSignal, Show } from 'solid-js';


const QuoteForm = () => {
  // State for form fields (remains the same)
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [Company ,setCompany] = createSignal('');

  // State for validation errors (remains the same)
  const [errors, setErrors] = createSignal({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    Company: '',
  });

  // State to track the form's submission status
  const [formStatus, setFormStatus] = createSignal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors = { firstName: '', lastName: '', email: '', phone: '', Company: '' };
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
    if (!Company().trim()) {
      newErrors.Company = 'Company name is required.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // This function's ONLY job is to send the data to your API endpoint.
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
      company: Company(),
    };

    try {
      // This sends the data to your secure server endpoint.
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    <div class="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl w-full max-w-md">
      <h3 class="text-2xl font-bold text-slate-800 text-center">Dial in your FREE quote!</h3>
      <p class="text-slate-600 text-center mb-6">Tell us about your telecom needs</p>

      <Show when={formStatus() === 'success'} fallback={
        <>
          <form onSubmit={handleSubmit} class="space-y-4">
            <div class="flex gap-4">
              <div class="w-1/2">
                <input 
                  type="text"
                  placeholder="First Name"
                  value={firstName()}
                  onInput={(e) => setFirstName(e.currentTarget.value)}
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black text-black"
                />
                <Show when={errors().firstName}><p class="text-red-500 text-sm mt-1">{errors().firstName}</p></Show>
              </div>
              <div class="w-1/2">
                <input 
                  type="text"
                  placeholder="Last Name"
                  value={lastName()}
                  onInput={(e) => setLastName(e.currentTarget.value)}
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black text-black"
                />
                <Show when={errors().lastName}><p class="text-red-500 text-sm mt-1">{errors().lastName}</p></Show>
              </div>
            </div>
            <div>
              <input 
                type="email"
                placeholder="Email Address"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black text-black"
              />
              <Show when={errors().email}><p class="text-red-500 text-sm mt-1">{errors().email}</p></Show>
            </div>
            <div>
              <input 
                type="tel"
                placeholder="Phone Number"
                value={phone()}
                onInput={(e) => setPhone(e.currentTarget.value)}
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black text-black"
              />
              <Show when={errors().phone}><p class="text-red-500 text-sm mt-1">{errors().phone}</p></Show>
            </div>
            <div >
                <input 
                  type="text"
                  placeholder="Company Name"
                  value={Company()}
                  onInput={(e) => setCompany(e.currentTarget.value)}
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black text-black"
                />
                <Show when={errors().Company}><p class="text-red-500 text-sm mt-1">{errors().Company}</p></Show>
              </div>
            


            <button type="submit" class="w-full bg-titan-blue text-white font-bold py-3 px-6 rounded-md hover:bg-titan-blue-dark transition-colors duration-300" disabled={formStatus() === 'submitting'}>
              {formStatus() === 'submitting' ? 'Sending...' : 'UPGRADE TODAY'}
            </button>
          </form>
          
          <Show when={formStatus() === 'error'}>
            <p class="text-red-500 text-center mt-1">Oops! Something went wrong. Please try again.</p>
          </Show>
        </>
      }>
        <div class="text-center p-8 bg-green-50 rounded-lg">
          <h3 class="text-2xl font-bold text-green-800">Quote Request Received!</h3>
          <p class="text-green-700 mt-2">Thank you! A member of our team will be in touch with you shortly.</p>
        </div>
      </Show>
    </div>
  );
};

export default QuoteForm;
