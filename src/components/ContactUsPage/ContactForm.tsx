// export default function MyContactForm() {
//     return (
//         <>
//             <form className="contact-form">
//                 <div className="form-row">
//                     <div className="form-group form-group-name">
//                         <label className="text-18 text-rg">
//                             Name<span className="req">*</span>
//                         </label>
//                         <input type="text" name="name" placeholder="Enter your name" required />
//                     </div>

//                     <div className="form-group form-group-email">
//                         <label className="text-18 text-rg">
//                             Email<span className="req">*</span>
//                         </label>
//                         <input type="email" name="email" placeholder="Enter your email" required />
//                     </div>
//                 </div>

//                 <div className="form-group form-group-org">
//                     <label className="text-18 text-rg">
//                         Organization<span className="req">*</span>
//                     </label>
//                     <input type="text" name="organization" placeholder="Enter your Organization Name" required />
//                 </div>

//                 <div className="form-group ">
//                     <label className="text-18 text-rg">Message</label>
//                     <textarea name="message" placeholder="Enter your message" rows={4} />
//                 </div>

//                 <button className="submit-btn site-radius-10 text-18 text-md btn-padding" type="submit">
//                     Submit
//                 </button>
//             </form>
//         </>
//     );
// }

'use client';

import { useState } from 'react';

export default function MyContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! We’ll contact you shortly.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {status.message && (
        <div
          className={`p-4 rounded mb-4 ${
            status.type === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="form-row">
        <div className="form-group form-group-name">
          <label className="text-18 text-rg">
            Name<span className="req">*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group form-group-email">
          <label className="text-18 text-rg">
            Email<span className="req">*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group form-group-org">
        <label className="text-18 text-rg">
          Organization<span className="req">*</span>
        </label>

        <input
          type="text"
          name="organization"
          placeholder="Enter your Organization Name"
          required
          value={formData.organization}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="text-18 text-rg">Message</label>

        <textarea
          name="message"
          placeholder="Enter your message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        className="submit-btn site-radius-10 text-18 text-md btn-padding"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
