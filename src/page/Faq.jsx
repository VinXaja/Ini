import React from "react";

class Faq extends React.Component {
  render() {
    return (
      <div className="container py-3">
        <h2 className="pb-2 mb-4 border-bottom">Frequently Asked Questions (FAQs)</h2>
        <div>
          <h4>How many items of print books can I borrow from the library?</h4>
          <p>You can borrow up to 10 copies of print books per loan.</p>

          <h4>How long can I borrow the collections?</h4>
          <p>Our borrowing period is 10 days.</p>

          <h4>How many times can I renew the borrowed item(s)?</h4>
          <p>The borrowed item(s) can be renewed once. But when the item(s) is reserved by others, renewal is not allowed.</p>

          <h4>Why is my device unable to connect to the Wi-Fi in the library?</h4>
          <p>
            There may be some technical problems, please check these:
            <ul>
              <li>You have not activated Wi-Fi function in your device.</li>
              <li>The quota of maximum Wi-Fi users has probably been reached. If you can not connect to the Wi-Fi access due to this problem, you can try again to connect after some time.</li>
            </ul>
            Several devices (e.g. notebook) need to be restarted to connect to Wi-Fi access. This often solves most of the problems.
          </p>
        </div>
      </div>
    );
  }
}

export default Faq;
