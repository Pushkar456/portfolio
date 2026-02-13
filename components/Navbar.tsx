"use client";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between">
        {/* <h1 className="font-bold text-lg">Pushkar</h1> */}
        <h1
         className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight cursor-pointer"
         style={{
        transform: "none",
        opacity: 1,
  }}
>
  Portfolio
</h1>

       
      </div>
    </nav>
  );
};

export default Navbar;

