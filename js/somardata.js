<script>


function acrescenta_data(data,qtd)
{
	data_split = data.split("/");
	dia = data_split[0];
	mes = data_split[1];
	ano = data_split[2];
	dia = qtd + parseInt(dia);

	if ((mes == "01") || (mes == "03") || (mes == "05") || (mes == "07") || (mes == "08") || (mes == "10") || (mes == "12"))
	{
		if (dia>31)
		{
			dia -= 31
			mes = 1 + parseInt(mes)
			if (mes> 12)
				{
					mes -=12
					ano = 1 + parseInt(ano)
				}	
		}
	}

	else (if mes == "04" || mes == "06" || mes == "09" || mes == "11")
	{
		dia = qtd + parseInt(dia);
		if dia>30
		{
			dia -= 30
			mes = 1 + parseInt(mes)
		}

	}
	else
	{
		dia = qtd + parseInt(dia);
		if (leapYear(ano)){
		if (dia>29)
		{
			dia -= 29
			mes = 1 + parseInt(mes)
		}
		}
		else{
		if (dia>28)
		{
			dia -= 28
			mes = 1 + parseInt(mes)
		}
		}
	
	
	
	}

	if (mes < 10 && dia<10) 
	{
		var concat_string = "0" + dia + "/0" + mes + "/" + ano
	}	
	else if (mes<10 && dia > 10)
	{
		var concat_string = dia + "/0" + mes + "/" + ano
	}	
	else if (mes>10 && dia<10) 
	{
		var concat_string = "0" + dia + "/" + mes + "/" + ano
	}	
	else
	{
		var concat_string = dia + "/" + mes + "/" + ano
	}

	return concat_string
}

function leapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}










</script>
