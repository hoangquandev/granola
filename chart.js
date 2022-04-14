const cases = document.querySelector('.coronavirus-input');
const deaths = document.querySelector('.deaths-input');
const recovered = document.querySelector('.recovered-input');












const ctx = document.getElementById('mychart').getContext('2d');

let mychart = new chart(ctx,{
    type: 'pie',
    data: {
        labels: ['Active Cases', 'Deaths', 'Recovered'],
        datasets : [
            {
                label:'# of votes',
                data : [0,0,0],
                backgroundColor: ['red', '#dd3b79', '#ff766b'],
                borderWidth:1
            }
        ]
    }
});

const updateChartValue = (input, dataOrder)=> {
    input.addEventListener ('change', e => {
        mychart.data.datasets[0].data[dataOrder] = e.target.value;
        mychart.update();
    });
};

updateChartValue(cases,0);
updateChartValue(deaths,1);
updateChartValue(recovered,2);