function Ticket() {
  return (
    <div className="pt-32 pb-12 px-4 md:px-16">
     
      <div className="text-4xl font-medium mb-16 text-center md:text-left">
        <h1>To create a ticket, select a relevant topic</h1>
      </div>

      <div className="flex flex-wrap justify-center md:justify-around gap-12">
        
        <div className="max-w-sm">
          <h2 className="text-3xl font-medium mb-4">
            <i className="fa-solid fa-plus mr-2"></i> Account Opening
          </h2>
          <div className="text-xl space-y-2">
            <a href="#" className="block">Resident individual</a>
            <a href="#" className="block">Minor</a>
            <a href="#" className="block">Non Resident Indian NRI</a>
            <a href="#" className="block">Company, Partnership, HUF and LLP</a>
            <a href="#" className="block">Glossary</a>
          </div>
        </div>

        <div className="max-w-sm">
          <h2 className="text-3xl font-medium mb-4">
            <i className="fa-solid fa-user mr-2"></i> Your Zerodha Account
          </h2>
          <div className="text-xl space-y-2">
            <a href="#" className="block">Your Profile</a>
            <a href="#" className="block">Account modification</a>
            <a href="#" className="block">Client Master Report and Depository Participant</a>
            <a href="#" className="block">Nomination</a>
            <a href="#" className="block">Transfer and conversion of securities</a>
          </div>
        </div>

        <div className="max-w-sm">
          <h2 className="text-3xl font-medium mb-4">
            <i className="fa-solid fa-coins mr-2"></i> Coin
          </h2>
          <div className="text-xl space-y-2">
            <a href="#" className="block">Mutual funds</a>
            <a href="#" className="block">National Pension Scheme NPS</a>
            <a href="#" className="block">Features on Coin</a>
            <a href="#" className="block">Payments and Orders</a>
            <a href="#" className="block">General</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
