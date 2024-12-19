function MultiChoiceQuestion() {
  const [active, setActive] = useState(true)
  let option

  function open() {
      if(active) {
          option.style.height = '250px'
          option.style.paddingTop = '2rem'
          option.style.paddingBottom = '2rem'
      }
      else {
          option.style.height = '0'
          option.style.paddingTop = '0'
          option.style.paddingBottom = '0'
      }
      setActive(!active)
  }

  return (
      <>
          <div class="group mt-5">
              <div onClick={() => {open()}} class="flex bg-[#6D96D9] items-center rounded-l-full px-10 py-2 gap-10">
                  <input class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
                  <div class="h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                  <div class="question">
                      <div class="font-semibold text-xl">Question 1:</div>
                      <div class="question-title">Who save Hitler from drowning when he was a kid</div>
                  </div>
                  <div class="ml-auto flex gap-5 items-center">
                      <div class="px-10 py-2 rounded-full font-bold bg-red-400 text-white">Multiple choice</div>
                      <svg class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                      <svg class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                  </div>
              </div>
              <div ref={(current) => (option = current)} class="shadow-xl ml-20 px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                  <div class="option-list">
                      <MultiChoiceOption correct={true} />
                      <MultiChoiceOption correct={true} />
                      <MultiChoiceOption correct={false} />
                  </div>
              </div>
          </div>
      </>
  )
}
export default MultiChoiceQuestion