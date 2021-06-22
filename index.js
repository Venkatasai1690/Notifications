function Notification(props) {
  // Write your code here.
  const { className, children, imageUrl } = props;
  const containerClassName = `card ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={imageUrl} />
      <p className="message">{children}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="card primary-bg-color"
        children="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="card success-bg-color"
        children="Success Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="card warning-bg-color"
        children="Warning Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="card error-bg-color"
        children="Error Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
