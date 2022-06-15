import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

server.get('/holidays', (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
    ];
    let holidaysList = holidays.map((h) => h.name);
    res.send(holidaysList);
})
server.get('/is-today-holiday', (req, res) => {
    const holidays = [
        { date: "01/01/2022", name: "Confraternização mundial" },
        { date: "03/01/2022", name: "Carnaval" },
        { date: "17/04/2022", name: "Páscoa" },
        { date: "21/04/2022", name: "Tiradentes" },
        { date: "01/05/2022", name: "Dia do trabalho" },
        { date: "16/06/2022", name: "Corpus Christi" },
        { date: "07/09/2022", name: "Independência do Brasil" },
        { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
        { date: "02/11/2022", name: "Finados" },
        { date: "15/11/2022", name: "Proclamação da República" },
        { date: "25/12/2022", name: "Natal" }
    ];
    const hoje = new Date().toLocaleDateString();
    const holiday = holidays.filter((h) => h.date===hoje);
    let message;
    if(holiday.length===0){
        message = 'Não, hoje não é feriado';
    }else{
        message = `Sim, hoje é ${holiday[0].name}`;
    }
    res.send(message);
})
server.listen(5500);