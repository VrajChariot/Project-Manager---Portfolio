
function Footer() {
  function handleOnclick() {
    window.open("https://vrajdev.vercel.app/", "_blank");
  }
  return <div className='text-center w-full py-4 text-sm sm:text-base cursor-pointer' onClick={handleOnclick}>© 2025 Vraj Shah. Made with ❤️ and lots of ☕️</div>;
}

export default Footer