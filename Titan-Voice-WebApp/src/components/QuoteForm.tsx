import { createSignal, Show } from 'solid-js';

const QuoteForm = () => {
  // State for form fields
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [smsConsent, setSmsConsent] = createSignal(false);

  // State for validation errors
  const [errors, setErrors] = createSignal({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const validate = () => {
    const newErrors = { firstName: '', lastName: '', email: '', phone: '' };
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
    } else if (!/^\+?[0-9\s-()]{10,}$/.test(phone())) {
      newErrors.phone = 'Please enter a valid phone number.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully!');
      console.log({
        firstName: firstName(),
        lastName: lastName(),
        email: email(),
        phone: phone(),
        smsConsent: smsConsent(),
      });
      alert('Thank you for your submission!');
    } else {
      console.log('Validation failed.');
    }
  };

  return (
    <div class="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl w-full max-w-md">
      <h3 class="text-2xl font-bold text-slate-800 text-center">Dial in your FREE quote!</h3>
      <p class="text-slate-600 text-center mb-6">Tell us about your telecom needs</p>

      <form onSubmit={handleSubmit} class="space-y-4">
        <div class="flex gap-4">
          <div class="w-1/2">
            <input 
              type="text"
              placeholder="First Name"
              value={firstName()}
              onInput={(e) => setFirstName(e.currentTarget.value)}
              // Added placeholder:text-black
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
              // Added placeholder:text-black
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
            // Added placeholder:text-black
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
            // Added placeholder:text-black
            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-black"
          />
          <Show when={errors().phone}><p class="text-red-500 text-sm mt-1">{errors().phone}</p></Show>
        </div>
        
        <div class="flex items-start gap-3">
            <input 
              type="checkbox"
              id="sms-consent"
              checked={smsConsent()}
              onChange={(e) => setSmsConsent(e.currentTarget.checked)}
              class="mt-1 h-4 w-4"
            />
            <label for="sms-consent" class="text-xs text-slate-500">
              Sign up to receive text messages. By signing up, you consent to receive SMS/MMS messages from us. Message and data rates may apply.
            </label>
        </div>

        <button type="submit" class="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300">
          UPGRADE TODAY
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;