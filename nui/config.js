const carrosList = () => {
	$.post("http://warn-spawncars/carrosList",JSON.stringify({}),(data) => {
		let i = 0;
		const nameList = data.shopitens.sort((a,b) => (a.name > b.name) ? 1: -1);
		
		$('#inicio').html(`
			<input id="amount"  class="qtd" placeholder="ID">
			${nameList.map((item) => (`
				<div class="model" data-index-key="${item.index}">
				<div class="name">${item.name}</div>
				<div class="spawn">SPAWN</div>
				</div>
			`)).join('')}
		`);
	});
}