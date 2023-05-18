export default function CardCategory() {
  return (
    <div className="text-center pt-5 pb-10">
      <h1 className="font-bold text-[20px]">Category Products</h1>
      <div class="flex flex-col md:flex-row text-center">
        {/* CARD 3 */}
        <div class="basis-1/2 md:basis-1/3 p-2 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <div className="flex items-center p-5 bg-white px-20 rounded-md shadow-md">
              <span>
                <img
                  className="h-auto"
                  src="../Image/iconbaju.png"
                  alt="Your Company"
                />
              </span>
              <span className="p-5">
                <h1 className="font-bold">Clothing</h1>
                <h1>10 Items</h1>
              </span>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div class="basis-1/2 md:basis-1/3 p-2 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <div className="flex items-center p-5 bg-white px-20 rounded-md shadow-md">
              <span>
                <img
                  className="h-auto"
                  src="../Image/iconcelana.png"
                  alt="Your Company"
                />
              </span>
              <span className="p-5">
                <h1 className="font-bold">Celana</h1>
                <h1>10 Items</h1>
              </span>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div class="basis-1/2 md:basis-1/3 p-2 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <div className="flex items-center p-5 bg-white px-16 rounded-md shadow-md">
              <span>
                <img
                  className="h-auto"
                  src="../Image/icontopi.png"
                  alt="Your Company"
                />
              </span>
              <span className="p-5">
                <div className="">
                  <h1 className="font-bold">Accesories</h1>
                  <h1>10 Items</h1>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
