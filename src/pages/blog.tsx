import sunset from '../assets/sunset.png';

function blog() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className='mt-5 text-center'>Boho Chic for earth babes</h1>
      <h4 className="text-muted text-center mb-5">BEAUTY, LIFESTYLE</h4>
      <img src={sunset} alt="kaktus" className='mx-auto d-block mb-5' style={{width: '100%', height: '500px', objectFit: 'cover' }}/>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque tincidunt scelerisque libero. Aenean fermentum risus id tortor. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam commodo dui eget wisi. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Donec quis nibh at felis congue commodo. Aliquam erat volutpat. Praesent id justo in neque elementum ultrices. Suspendisse sagittis ultrices augue. Praesent in mauris eu tortor porttitor accumsan. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.

        Aliquam ornare wisi eu metus. Aenean vel massa quis mauris vehicula lacinia. Quisque porta. Etiam bibendum elit eget erat. Curabitur bibendum justo non orci. Mauris dictum facilisis augue. Curabitur bibendum justo non orci. Etiam posuere lacus quis dolor. Nulla quis diam. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.

        Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Aliquam erat volutpat. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Maecenas sollicitudin. Duis viverra diam non justo. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Proin mattis lacinia justo. Curabitur sagittis hendrerit ante. Integer imperdiet lectus quis justo.

        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aliquam erat volutpat. Integer pellentesque quam vel velit. Pellentesque pretium lectus id turpis. Aenean vel massa quis mauris vehicula lacinia. Aenean fermentum risus id tortor. Vestibulum fermentum tortor id mi. Fusce consectetuer risus a nunc. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

        Integer tempor. Nulla est. Praesent dapibus. Nunc dapibus tortor vel mi dapibus sollicitudin. Suspendisse nisl. Fusce nibh. Nunc tincidunt ante vitae massa. Vivamus porttitor turpis ac leo. Praesent dapibus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Praesent dapibus. Ut tempus purus at lorem. Vivamus ac leo pretium faucibus. Integer lacinia. Fusce suscipit libero eget elit. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas aliquet accumsan leo. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed ac dolor sit amet purus malesuada congue. Nam sed tellus id magna elementum tincidunt.
      </p>
      <div>
        <h1>Submit a Comment</h1>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form className="mt-4 mb-5" method="POST" action="/api/submit-comment">
          <div className="mb-3">
            <textarea
              className="form-control text-center rounded-0"
              rows={5}
              placeholder="Your comment*"
            ></textarea>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control text-center rounded-0"
              placeholder="NAME*"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control text-center rounded-0"
              placeholder="EMAIL*"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control text-center rounded-0"
              placeholder="WEBSITE"
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="saveInfo"
            />
            <label className="form-check-label" htmlFor="saveInfo">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          <button type="submit" className="btn btn-dark w-100 rounded-0">
            SUBMIT COMMENT
          </button>
        </form>

      </div>
    </div>
  );
}
export default blog;