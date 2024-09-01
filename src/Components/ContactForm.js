import React from 'react';


const ContactForm = () => (
  <form className="space-y-4">
    <div>
      <label className="block">Name</label>
      <input type="text" className="w-full p-2 border rounded" />
    </div>
    <div>
      <label className="block">Email</label>
      <input type="email" className="w-full p-2 border rounded" />
    </div>
    <div>
      <label className="block">Message</label>
      <textarea className="w-full p-2 border rounded"></textarea>
    </div>
    <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Send</button>
  </form>
);

export default ContactForm;
