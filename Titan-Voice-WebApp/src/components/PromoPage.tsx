import { Component, createSignal, Show } from 'solid-js';
import { A } from '@solidjs/router';
import titanLogo from '../assets/titan-1.png';

const PromoPage: Component = () => {
  // State for all form fields
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [businessName, setBusinessName] = createSignal('');
  const [streetAddress, setStreetAddress] = createSignal('');
  const [addressLine2, setAddressLine2] = createSignal('');
  const [city, setCity] = createSignal('');
  const [state, setState] = createSignal('');
  const [zipCode, setZipCode] = createSignal('');
  const [numUsers, setNumUsers] = createSignal('');
  const [currentProvider, setCurrentProvider] = createSignal('');
  const [notes, setNotes] = createSignal('');

  // A single signal to hold all validation errors
  const [errors, setErrors] = createSignal({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    numUsers: '',
  });

  // Comprehensive validation function for all required fields
  const validate = () => {
    const newErrors = {
        firstName: '', lastName: '', email: '', phone: '',
        streetAddress: '', city: '', state: '', zipCode: '', numUsers: ''
    };
    let isValid = true;

    if (!firstName().trim()) { newErrors.firstName = 'First name is required.'; isValid = false; }
    if (!lastName().trim()) { newErrors.lastName = 'Last name is required.'; isValid = false; }
    if (!email().trim()) { newErrors.email = 'Email address is required.'; isValid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email())) { newErrors.email = 'Please enter a valid email.'; isValid = false; }
    if (!phone().trim()) { newErrors.phone = 'Phone number is required.'; isValid = false; }
    if (!streetAddress().trim()) { newErrors.streetAddress = 'Street address is required.'; isValid = false; }
    if (!city().trim()) { newErrors.city = 'City is required.'; isValid = false; }
    if (!state().trim()) { newErrors.state = 'State is required.'; isValid = false; }
    if (!zipCode().trim()) { newErrors.zipCode = 'Zip code is required.'; isValid = false; }
    if (!numUsers().trim()) { newErrors.numUsers = 'Number of users is required.'; isValid = false; }
    else if (parseInt(numUsers()) < 1) { newErrors.numUsers = 'Must be at least 1.'; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', { /* form data */ });
      alert('Thank you for your submission!');
    } else {
      console.log('Validation failed.');
    }
  };

  return (
    <div class="min-h-screen w-full bg-slate-100 p-4 sm:p-8 flex flex-col items-center">
      <div class="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
        <div class="flex justify-center mb-8">
          
          <img src="/logo.png" alt="TitanVoice Logo" class="w-48 sm:w-64"/>          

        </div>
        
        
        <form onSubmit={handleSubmit} class="space-y-6">
          {/* Personal Info */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input type="text" placeholder="First Name*" value={firstName()} onInput={(e) => setFirstName(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              <Show when={errors().firstName}><p class="text-red-500 text-sm mt-1">{errors().firstName}</p></Show>
            </div>
            <div>
              <input type="text" placeholder="Last Name*" value={lastName()} onInput={(e) => setLastName(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              <Show when={errors().lastName}><p class="text-red-500 text-sm mt-1">{errors().lastName}</p></Show>
            </div>
            <div>
              <input type="email" placeholder="Email Address*" value={email()} onInput={(e) => setEmail(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              <Show when={errors().email}><p class="text-red-500 text-sm mt-1">{errors().email}</p></Show>
            </div>
            <div>
              <input type="tel" placeholder="Phone Number*" value={phone()} onInput={(e) => setPhone(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              <Show when={errors().phone}><p class="text-red-500 text-sm mt-1">{errors().phone}</p></Show>
            </div>
          </div>
          
          {/* Business Info */}
          <div class="space-y-6">
            <input type="text" placeholder="Business Name" value={businessName()} onInput={(e) => setBusinessName(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            <div>
              <input type="text" placeholder="Street Address*" value={streetAddress()} onInput={(e) => setStreetAddress(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              <Show when={errors().streetAddress}><p class="text-red-500 text-sm mt-1">{errors().streetAddress}</p></Show>
            </div>
            <input type="text" placeholder="Address Line 2" value={addressLine2()} onInput={(e) => setAddressLine2(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <input type="text" placeholder="City*" value={city()} onInput={(e) => setCity(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                <Show when={errors().city}><p class="text-red-500 text-sm mt-1">{errors().city}</p></Show>
              </div>
              <div>
                <input type="text" placeholder="State*" value={state()} onInput={(e) => setState(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                <Show when={errors().state}><p class="text-red-500 text-sm mt-1">{errors().state}</p></Show>
              </div>
              <div>
                <input type="text" placeholder="Zip Code*" value={zipCode()} onInput={(e) => setZipCode(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                <Show when={errors().zipCode}><p class="text-red-500 text-sm mt-1">{errors().zipCode}</p></Show>
              </div>
            </div>
          </div>
          
          {/* Service Details */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input type="number" placeholder="Number of Users*" value={numUsers()} onInput={(e) => setNumUsers(e.currentTarget.value)} min="1" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
              <Show when={errors().numUsers}><p class="text-red-500 text-sm mt-1">{errors().numUsers}</p></Show>
            </div>
            <input type="text" placeholder="Current Service Provider" value={currentProvider()} onInput={(e) => setCurrentProvider(e.currentTarget.value)} class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
          </div>
          <textarea placeholder="Notes" value={notes()} onInput={(e) => setNotes(e.currentTarget.value)} rows="4" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" />
          
          <div class="pt-4">
            <button type="submit" class="w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300 text-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="mt-8">
        <A href="/" class="text-blue-600 hover:underline">
          &larr; Back to Landing Page
        </A>
      </div>
    </div>
  );
};

export default PromoPage;