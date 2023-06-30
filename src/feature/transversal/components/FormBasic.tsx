type FormBasicProps = {
  title: string;
};

export const FormBasic = ({ title }: FormBasicProps) => {
  return (
    <form
      className="card position-absolute mx-4 p-4  border-success "
      style={{ top: "20%", right: "5%", left: "5%", borderRadius: "1.2rem",   }}
    >
      <h5 className="text-center">{title}</h5>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
