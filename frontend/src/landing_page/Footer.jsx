function Footer() {
  return (
    <div className="bg-slate-100 px-4 py-6">
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6">
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-br from-[#0f172a] to-[#134e4a] bg-clip-text text-transparent">
            AlgoNest
          </h1>
          <p className="text-gray-500">© 2025 AlgoNest Ltd.</p>
          <p className="text-gray-500">All rights reserved.</p>
        </div>

        <div className="flex flex-wrap  justify-evenly md:justify-start ">
          <div className="m-4">
            <h2 className="text-black text-xl mb-2 font-semibold">Company</h2>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">AlgoNest.tech</a>
              </li>
            </ul>
          </div>

          <div className="m-4">
            <h2 className="text-black text-xl mb-2 font-semibold">Support</h2>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support portal</a>
              </li>
              <li>
                <a href="#">Downloads & resources</a>
              </li>
            </ul>
          </div>

          <div className="m-4">
            <h2 className="text-black text-xl mb-2 font-semibold">About</h2>
            <ul className="space-y-1 text-gray-500 text-sm">
              <li>
                <a href="#">Open an account</a>
              </li>
              <li>
                <a href="#">Fund transfer</a>
              </li>
              <li>
                <a href="#">60 day challenge</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-xs mt-8 px-2 text-justify leading-relaxed mb-8">
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
        
      </div>
      <br />
      <br />
    </div>
  );
}

export default Footer;
