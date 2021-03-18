window.addEventListener('load', (init) => {
    let joinList = evt => {
        let inputs = getElementById('empForm').elements;
        let inputByName = inputs["id"];
        console.log(inputByName);
        }
    console.log(joinList.value);
    let btn = document.getElementById('empForm');
    btn.addEventListener('click', (joinList) => {
        console.log(document.getElementById('empForm').elements);
    })
});
