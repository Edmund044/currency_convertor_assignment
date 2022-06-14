const ConvertCurrency = () => {
    return ( 
      
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
   
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px grid grid-cols-6 gap-6"> 
      <div className="col-span-6 sm:col-span-3">
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Amount 1</label>
          <input id="email-address" name="amount1" type="number"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="0"/>
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Currency 1</label>
                      <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                       </div>
                       <div>
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Amount 2</label>
          <input id="email-address" name="amount2" type="number"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="0"/>
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Currency 2</label>
                      <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                       </div>
      </div>

      

      <div>
      <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"><span className="text-indigo-600">100 USD </span>EQUALS <span className="text-indigo-600">2000 Ira</span></h2>
    </div>
      </div>
    </form>
  </div>
</div>
       );
}
 
export default ConvertCurrency;