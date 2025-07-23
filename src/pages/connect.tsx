import img from '../assets/contact.png';

function Connect() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={img} alt="contact" className="img-fluid imgmodel w-100" />
        </div>

        <div className="col-md-6">
          <h1 className="mb-4 ">Write to us</h1>
          <h4 className="mb-3">We would love to hear from you</h4>
          <p className="text-muted">
            Your content goes here. Edit or remove this text inline or in the module Content settings.
            You can also style every aspect of this content in the module Design settings and even apply custom CSS.
          </p>

          <form>
            <div className="mb-3">
              <input
                type="text"
                id="name"
                className="form-control text-center border-dark border-2 rounded-0"
                placeholder="NAME"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control text-center border-dark border-2 rounded-0"
                placeholder="EMAIL ADDRESS"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                className="form-control text-center border-dark border-2 rounded-0"
                rows={5}
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <button type="submit" className="btn border-dark bg-dark text-white border-2 w-100 rounded-0">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
