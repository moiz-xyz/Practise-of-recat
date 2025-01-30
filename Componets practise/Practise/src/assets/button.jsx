export function  Button() {
    let handleinp = () => {
        let inp = prompt ("ENter your  name") ;
        let color = prompt ("enter your color")
        alert(`name is ${inp} and color is ${color}`)
    }
    return <>
    <button onClick={handleinp }> click me  </button>
    </>
}
