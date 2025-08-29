// src/components/SupportPage.tsx

import { createSignal, Show, For } from 'solid-js';

const SupportPage = () => {
  // State for all form fields, matching the original component
  const [formState, setFormState] = createSignal({
    name: '',
    company: '',
    email: '',
    contactNumber: '',
    mainBusinessNumber: '',
    serviceCategory: '',
    phoneServiceIssue: '',
    urgency: '',
    newPhoneServiceItems: '',
    streetNumber: '',
    streetName: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    isp: '',
    faxNumber: '',
    faxIssueType: '',
    specificFaxIssue: '',
    trainingTypes: {
      'Phone Training': false,
      'FAX Training': false,
      'CyberSecurity Training': false,
      'Computer Software Training': false,
      'Other': false,
    },
    numbersToPort: '',
    authPerson: '',
    authTitle: '',
    billingNumber: '',
    accountNumber: '',
    signerName: '',
    agreeToTerms: false,
    description: '',
  });
  
  const [formStatus, setFormStatus] = createSignal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    // This is a simplified validation. A real app would have more robust checks.
    if (!formState().name || !formState().company || !formState().email || !formState().contactNumber || !formState().serviceCategory) {
      alert('Please fill out all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setFormStatus('submitting');
    try {
      const response = await fetch('/api/send-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState()),
      });
      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Failed to send support ticket');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setFormStatus('error');
    }
  };

  const handleInput = (e: Event) => {
    const { name, value } = e.currentTarget as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: Event) => {
    const { name, checked } = e.currentTarget as HTMLInputElement;
    setFormState(prev => ({
      ...prev,
      trainingTypes: { ...prev.trainingTypes, [name]: checked }
    }));
  };

  return (
    <div class="min-h-screen w-full bg-white">
      <section class="relative py-20 bg-cover bg-center text-white" style={{ "background-image": "url('https://santorinisolutions.com/wp-content/uploads/2020/01/vdhgv54ndnj21.png')" }}>
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold">Support Ticket Submission</h1>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto bg-gray-50 p-6 sm:p-10 rounded-xl shadow-xl">
            <Show when={formStatus() === 'success'} fallback={
              <>
                <h3 class="text-2xl font-semibold text-slate-800 mb-6 text-center">
                  Please fill out the ticket request fully, including selection from each dropdown.
                </h3>
                <form onSubmit={handleSubmit} class="space-y-6">
                  {/* --- Base Information Fields --- */}
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                      <input name="name" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                      <input name="company" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Your Business Email*</label>
                      <input name="email" type="email" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Your Contact Number*</label>
                      <input name="contactNumber" type="tel" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                    </div>
                     <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Main Business Number (Leave Blank if New Customer)</label>
                      <input name="mainBusinessNumber" type="tel" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                    </div>
                  </div>
                  
                  {/* --- Service Category Dropdown --- */}
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Please Select Service Category*</label>
                    <select name="serviceCategory" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                      <option value="">—</option>
                      <option value="Phone Service">Phone Service</option>
                      <option value="FAX Service">FAX Service</option>
                      <option value="Product Training">Product Training</option>
                      <option value="Porting Management">Porting Management</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* --- CONDITIONAL FIELDS CONTAINER --- */}
                  <div class="p-4 bg-gray-100 rounded-md space-y-4">
                    <Show when={formState().serviceCategory === 'Phone Service'}>
                      <div class="space-y-4">
                        <label class="block text-sm font-medium text-gray-700">Choose From Following*</label>
                        <select name="phoneServiceIssue" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                          <option value="">—</option>
                          <option value="New Phone Service">New Phone Service</option>
                          <option value="Add/Modify Features on Current Phone Service">Add/Modify Features</option>
                          <option value="Having Trouble on Current Phone Service">Having Trouble With Current Phone Service</option>
                          <option value="Move Phone from one address to another">Move Phone One Address To Another</option>
                          <option value="Upload Custom Voicemail Greeting">Upload Custom Voicemail Greeting</option>
                          <option value="Upload Custom On Hold Music">Upload Custom On Hold Music</option>
                          <option value="Other">Other</option>
                        </select>
                        <Show when={formState().phoneServiceIssue === 'New Phone Service'}>
                          <div class="pl-4 border-l-4 border-gray-300 space-y-4 pt-4">
                            <div>
                              <label class="block text-sm font-medium text-gray-700 mb-1">Select All that Apply*</label>
                              <select name="newPhoneServiceItems" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                                <option value="">—</option>
                                <option value="New Customer Location">New Customer Location</option>
                                <option value="Current Customer Adding New Location">Current Customer Adding New Location</option>
                                <option value="Current Customer Adding New Phone Number">Current Customer Adding New Phone Number</option>
                                <option value="I will be Porting an Existing Number">I will be Porting an Existing Number</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <input name="streetNumber" type="text" placeholder="Street Number (Required)" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                              </div>
                              <div>
                                <input name="streetName" type="text" placeholder="Street Name (Required)" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                              </div>
                            </div>
                            <input name="address2" type="text" placeholder="Address 2" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div>
                                <input name="city" type="text" placeholder="City (Required)" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                              </div>
                              <div>
                                <input name="state" type="text" placeholder="State (Required)" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                              </div>
                              <div>
                                <input name="zipCode" type="text" placeholder="Zip Code (Required)" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                              </div>
                            </div>
                            <div>
                              <label class="block text-sm font-medium text-gray-700 mb-1">My Current Internet Service Provider</label>
                              <select name="isp" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                                <option value="">—</option>
                                <option value="AT&T DSLU">AT&T DSLU/U-Verse(Speed: Between 10Mbps - 100Mbps)</option>
                                <option value="AT&T Fiber">AT&T Fiber (Speed: Between 300Mbps - 1000Mbps)</option>
                                <option value="Frontier Fiber">Frontier Fiber</option>
                                <option value="Spectrum Business">Spectrum Business (Speed: 200Mbps - 600Mbps)</option>
                                <option value="Spectrum Dedicated Fiber">Spectrum Dedicated Fiber</option>
                                <option value="SparkLight Internet">SparkLight Internet</option>
                                <option value="Other">Other</option>
                                <option value="Don't Know">Don't Know</option>
                              </select>
                            </div>
                          </div>
                        </Show>
                        <Show when={formState().phoneServiceIssue === 'Having Trouble on Current Phone Service'}>
                          <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Select the Urgency of the request*</label>
                            <select name="urgency" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                              <option value="">—</option>
                              <option value="Emergency">Emergency/Affecting Everyone</option>
                              <option value="High">Functionality stopped working for all devices</option>
                              <option value="Medium">Functionality stopped working for 1 device</option>
                              <option value="One Piece">One Piece of Hardware Stopped Working</option>
                              <option value="Low">Minor/Please Schedule</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </Show>
                      </div>
                    </Show>
                    <Show when={formState().serviceCategory === 'FAX Service'}>
                      <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Fax Number Affected*</label>
                            <input name="faxNumber" type="tel" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Choose From Following*</label>
                            <select name="faxIssueType" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                                <option value="">—</option>
                                <option value="Problems with FAX Service">Problems with FAX Service</option>
                                <option value="Add New FAX Service">Add New FAX Service</option>
                                <option value="Modify Existing FAX Service">Modify Existing FAX Service</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <Show when={formState().faxIssueType === 'Problems with FAX Service'}>
                             <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Specific FAX Issue*</label>
                                <select name="specificFaxIssue" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300">
                                    <option value="">—</option>
                                    <option value="Unable to receive FAX">Unable to receive FAX</option>
                                    <option value="Unable to Send Fax">Unable to Send Fax</option>
                                </select>
                            </div>
                        </Show>
                      </div>
                    </Show>
                    <Show when={formState().serviceCategory === 'Product Training'}>
                      <label class="block text-sm font-medium text-gray-700">Specify all types of training you require:</label>
                      <div class="space-y-2 mt-2">
                        <For each={Object.keys(formState().trainingTypes)}>
                          {key => (
                            <div class="flex items-center">
                              <input type="checkbox" name={key} id={key} onChange={handleCheckbox} class="h-4 w-4 rounded border-gray-300" />
                              <label for={key} class="ml-3 block text-sm text-gray-900">{key}</label>
                            </div>
                          )}
                        </For>
                      </div>
                    </Show>
                    <Show when={formState().serviceCategory === 'Porting Management'}>
                      <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Street Number*</label>
                            <input name="streetNumber" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Street Name*</label>
                            <input name="streetName" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input name="address2" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">City*</label>
                            <input name="city" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">State*</label>
                            <input name="state" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Zip Code*</label>
                            <input name="zipCode" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">List all Telephone Numbers to be Ported*</label>
                            <input name="numbersToPort" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Authorizing Person*</label>
                            <input name="authPerson" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <p class="text-sm text-gray-600">Please provide the full name of the person who is authorized on your account with your current carrier to request changes. If this name does not match what your carrier has on file, they may reject the port.</p>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Authorizing Title*</label>
                            <input name="authTitle" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Billing Number*</label>
                            <input name="billingNumber" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <p class="text-sm text-gray-600">Which number on your account is considered the Billing Number or BTN. If unsure, leave it blank. Each carrier is different and some carriers do not store a BTN and will ignore whatever you define here. BTN number can’t be a Toll Free number.</p>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Authorized Signer's Name*</label>
                            <input name="signerName" type="text" onInput={handleInput} class="w-full px-4 py-3 rounded-md border border-gray-300" />
                        </div>
                        <div class="flex items-start gap-2">
                            <input type="checkbox" name="agreeToTerms" id="agreeToTerms" onChange={(e) => setFormState(p => ({...p, agreeToTerms: e.currentTarget.checked}))} class="h-4 w-4 mt-1" />
                            <label for="agreeToTerms" class="text-xs text-gray-600">By checking this box, I assert that I am authorized to make the port out request for the listed phone number(s).</label>
                        </div>
                        <p class="text-sm text-gray-600">Please Attach Most Recent Bill!</p>
                      </div>
                    </Show>
                  </div>

                  {/* --- General Fields --- */}
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Please Describe any Specific Information</label>
                    <textarea name="description" onInput={handleInput} rows="5" class="w-full px-4 py-3 rounded-md border border-gray-300" />
                  </div>
                   <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Attach a File (Valid types: pdf, jpeg, jpg, png, mp3)</label>
                      <input type="file" name="file" class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  </div>

                  <div class="pt-4">
                    <button type="submit" class="w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-md hover:bg-blue-900 text-lg" disabled={formStatus() === 'submitting'}>
                      {formStatus() === 'submitting' ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </form>
                <Show when={formStatus() === 'error'}>
                  <p class="text-red-500 text-center mt-4">Oops! Something went wrong. Please try again.</p>
                </Show>
              </>
            }>
              <div class="text-center p-8 bg-green-50 rounded-lg">
                <h3 class="text-2xl font-bold text-green-800">Ticket Submitted!</h3>
                <p class="text-green-700 mt-2">Thank you for your request. Our support team will be in touch shortly.</p>
              </div>
            </Show>
          </div>
          <div class="mt-8 text-center">
            <a href="/" class="text-blue-600 hover:underline">
              &larr; Back to Main Site
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
