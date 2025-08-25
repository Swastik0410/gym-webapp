function Contact() {
  return (
    <div className="max-w-lg mx-auto card p-6">
      <h1 className="text-3xl font-bold mb-4">✉️ Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="input" placeholder="Your name" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="input" placeholder="Your email" />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea className="input h-32" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
