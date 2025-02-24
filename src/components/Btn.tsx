type BtnProps = {
    value: string;
    addedToCart: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Btn = ({addedToCart, value}: BtnProps) => {


  return (
      <button onClick={addedToCart} className="cursor-pointer font-inter rounded-full text-black hover:text-amber-100 bg-brand hover:bg-amber-500 duration-300 ease-in-out py-3 px-10 font-semibold text-sm shadow-2xl">{value}</button>
    )
}

export default Btn
