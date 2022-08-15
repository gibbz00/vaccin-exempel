<script lang="ts">
	// Tailwind styles
	import '../app.css'

	// Lista med vaccin som finns
	let existingVaccines: string[] = ['COVID-19', 'Hepatit A', 'Mässling', 'Polio']
	// Lista med tagna vaccin
	let takenVaccines: string[] = []

	// Värde på nytt vaccin
	let newVaccine: string = ''
	function addVaccine() {
		existingVaccines.push(newVaccine)
		// Svelte vet bara att något nytt uppdateras vid explicit assignment
		existingVaccines = existingVaccines
		newVaccine = ''
		console.log(existingVaccines)
	}

	function removeVaccine(vaccine: string) {
		// Ta bord från vaccin lista
		// (ställe)
		{
			let index = existingVaccines.indexOf(vaccine)
			existingVaccines.splice(index, 1)
			existingVaccines = existingVaccines
		}

		{
			// Ta bort från tagna
			let index = takenVaccines.indexOf(vaccine)
			if (index > -1) {
				takenVaccines.splice(index, 1)
				takenVaccines = takenVaccines
			}
		}
	}

	let countryVaccineInfo: Map<string, string[]> = new Map()
	countryVaccineInfo.set('USA', ['Mässling', 'Polio'])
	countryVaccineInfo.set('Sverige', ['COVID-19', 'Polio'])

	let chosenCountry: string | undefined = undefined

	console.log(takenVaccines.includes('COVID-19'))
</script>

<body class="bg-blue-800 w-screen h-screen grid place-content-center">
	<main class="m-10 p-8 bg-zinc-100 w-max">
		<h1 class="text-5xl mb-5">Vaccinkoll</h1>

		<div class="flex md:space-x-4 flex-col md:flex-row">
			<section class="bg-white p-5 shadow-md">
				<!-- Visa alla vaccin -->
				<h2 class="text-2xl mb-1">Vaccinlista</h2>
				{#each existingVaccines as vaccine (vaccine)}
					<div class="text-lg flex">
						<input type="checkbox" bind:group={takenVaccines} value={vaccine} />
						<div class="ml-2 group flex">
							{vaccine}
							<button
								class="hidden group-hover:block ml-2 text-gray-500"
								on:click={() => removeVaccine(vaccine)}>X</button
							>
						</div>
					</div>
				{/each}

				<!-- Lägg till vaccin -->
				<div class="mt-3 mb-1">Lägg till ett nytt vaccin</div>
				<div class="flex">
					<input
						class="border-2 mr-2"
						placeholder="Namn"
						type="text"
						bind:value={newVaccine}
					/>
					<button class="border-2 py-1 px-2" on:click={addVaccine}>Skicka</button>
				</div>
			</section>

			<section class="bg-white p-5 mt-5 md:mt-0 shadow-md flex flex-col">
				<div class="flex contents-center mb-2">
					<div class="self-center">
						<h2 class="text-2xl pr-3 text-center">Välj land:</h2>
					</div>
					<select
						class="px-2 py-2 bg-blue-800 text-white font-semibold"
						bind:value={chosenCountry}
					>
						{#each [...countryVaccineInfo.keys()] as country}
							<option value={country}>{country} </option>
						{/each}
					</select>
				</div>

				{#if chosenCountry != undefined}
					<ul class="border-2 h-full p-4">
						{#each [...countryVaccineInfo.get(chosenCountry)] as recommendedVaccines}
							<li class="text-lg">
								{recommendedVaccines}
								{#if takenVaccines.includes(recommendedVaccines)}
									<span class="text-green-600"> ✓ </span>
								{:else}
									<span class="text-red-700"> ✗ </span>
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		</div>
	</main>
</body>
