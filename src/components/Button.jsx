export const Button =({text, customClassName}) =>{
    return (
      <div>
        <button className={`flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-2 text-lg bg-[#235CEB] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-100 hover:text-xl transform transition-all duration-500  ${customClassName}`}>
          <a href="#">{text}</a>
        </button>
      </div>
    );
}