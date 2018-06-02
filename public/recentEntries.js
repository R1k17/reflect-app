function loadRecentEntriesPage(){
	let element = `
			<section class="row" id="calendar-row">
				<h2>Find An Entry</h2>
				<div id="calendar-section">
					<h3 id="calendar-header"></h3>
					<button id="prev-button" class="calendar-buttons" disabled="true">Previous</button>
					<button id="next-button" class="calendar-buttons" disabled="true">Next</button>
					<table id="calendar"></table>
				</div>
			</section>
			<section class="row" id="entries-row">
				<h2>Recent Entries</h2>
	`;

	const loadEntries = new Promise((resolve, reject) => {
		let past_entries = getPastEntries();
		resolve(past_entries);
	});

	loadEntries
		.then(past_entries => {
			if(past_entries.length === 0){
				element = noEntriesElement(element);
			}
			else{
				for(let i = 0; i < past_entries.length; i++){
					element = element.concat(`
						<div class="entry-excerpt">
							<h3>Date, Entry Title</h3>
							<p>Summary and stuff that a person would write in and it could be cool I guess.</p>
							<button class="select-button">Select</button>
						</div>
					`);
				}

				element = element.concat(`
						<button>Later Entries</button>
						<button>Earlier Entries</button>
						<div id="selected-entry">
							<h2>Selected Entry</h2>
							<p>No entry selected.</p> 
						</div>
					</section>
				`);
			}

			$('#dynamic-page').html(element);

			reloadCalendar();
		});
}

function getPastEntries(){
	return [];
}

// <div id="selected-entry">
// 	<h2>Selected Entry</h2>
// 	<h3>Prompt</h3>
// 	<p>here is text for this</p>
// 	<h3>Prompt</h3>
// 	<p>here is text for this</p>
// 	<h3>Prompt</h3>
// 	<p>here is text for this</p>
// 	<button class="re-edit-button">Edit</button><button class="re-delete-button">Delete</button>
// </div>

function noEntriesElement(element){
	return element.concat(`
			<p>You don't have any entries yet!</p>
			<div id="selected-entry">
				<h2>Selected Entry</h2>
				<p>No entry selected.</p> 
			</div>
		</section>
	`);
}