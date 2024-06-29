document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('computer-form');
    const totalElement = document.getElementById('total');

    form.addEventListener('change', updateTotal);

    function updateTotal() {
        let total = 0;
        const selects = form.querySelectorAll('select');
        selects.forEach(select => {
            total += parseInt(select.value);
        });
        totalElement.textContent = total;
    }
    

    function resetform(){
        form.reset();
        totalElement.textContent = '0'
    }
});