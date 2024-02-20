// For Extra Capabilities
// TODO: Fix Extra Move, Capability, Ability generation and How to get data in JavaScript in order to generate PDF. We close tho!

let capabilityCount = 1;
let abilityCount = 1;
let moveCount = 1;

document.getElementById("add-move").addEventListener("click",  () => {
    const moveContainer = document.getElementById("moves-container");
    const entry = document.createElement("div");
    entry.id = `move-${moveCount}`;
    entry.className = "move-input";
    entry.innerHTML = `<div class="move-wrapper">
        <div>
        <label for="move-name-${moveCount}">Name:</label>
        <input type="text" id="move-name-${moveCount}" name="move-name" >
        </div>
        <div>
        <label for="move-frequency-${moveCount}">Frequency:</label>
        <input type="text" id="move-frequency-${moveCount}" name="move-frequency" >
        </div>
        <div>
        <label for="move-type-${moveCount}">Type:</label>
        <select id="move-type-${moveCount}">
                            <option value="Normal">Normal</option>
                            <option value="Fire">Fire</option>
                            <option value="Water">Water</option>
                            <option value="Electric">Electric</option>
                            <option value="Grass">Grass</option>
                            <option value="Ice">Ice</option>
                            <option value="Fighting">Fighting</option>
                            <option value="Poison">Poison</option>
                            <option value="Ground">Ground</option>
                            <option value="Flying">Flying</option>
                            <option value="Psychic">Psychic</option>
                            <option value="Bug">Bug</option>
                            <option value="Rock">Rock</option>
                            <option value="Ghost">Ghost</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Steel">Steel</option>
                            <option value="Fairy">Fairy</option>
                        </select>
        </div>
    </div>
    <div class="move-wrapper">
        <div>
        <label for="move-ac-${moveCount}">AC:</label>
        <input type="text" id="move-ac-${moveCount}" name="move-ac" >
        </div>
        <div>
        <label for="move-damage-base-${moveCount}">Damage Base:</label>
        <input type="text" id="move-damage-base-${moveCount}" name="move-damage-base" >
        </div>
        <div>
        <label for="move-range-${moveCount}">Range:</label>
        <input type="text" id="move-range-${moveCount}" name="move-range" >
        </div>
    </div>
    <div class="move-wrapper">
        <div>
        <label for="move-damage-type-${moveCount}">Damage Type:</label>
        <input type="text" id="move-damage-type-${moveCount}" name="move-damage-type" >
        </div>
    </div>
    <div class="move-wrapper">
        <label for="move-effect-${moveCount}">Effect:</label>
        <textarea id="move-effect-${moveCount}" name="move-effect" ></textarea>
    </div>`;
    moveContainer.appendChild(entry);
    moveCount++;
});

document.getElementById("add-extra-capability").addEventListener("click",  () => {
  const capabilityContainer = document.getElementById("extra-capabilities-container");
  const entry = document.createElement("div");
  entry.id = `extra-capability-${capabilityCount}`;
  entry.className = "extra-capability-input";
  entry.innerHTML = `
  <label for="extra-capability-name-${capabilityCount}">Name:</label>
  <input type="text" id="extra-capability-name-${capabilityCount}" name="extra-capability-name" required>
  <label for="extra-capability-description-${capabilityCount}">Description:</label>
  <textarea id="extra-capability-description-${capabilityCount}" name="extra-capability-description" required></textarea>
  `;
  capabilityContainer.appendChild(entry);
  capabilityCount++;
});

document.getElementById("add-ability").addEventListener("click",  () => {
  const abilityContainer = document.getElementById("abilities-container");
  const entry = document.createElement("div");
  entry.id = `ability-${abilityCount}`;
  entry.className = "ability-input";
  entry.innerHTML = `
  <label for="ability-name-${abilityCount}">Ability Name:</label>
  <input type="text" id="ability-name-${abilityCount}" name="ability-name" required>
  <label for="ability-description-${abilityCount}">Ability Description:</label>
  <textarea id="ability-description-${abilityCount}" name="ability-description" required></textarea>
  `;
  abilityContainer.appendChild(entry);
  abilityCount++;
});

  document.addEventListener("DOMContentLoaded", function() {
         // Listen for form submission
         document.getElementById("pokemon-form").addEventListener("submit", function(event) {
         // Prevent default form submission behavior
         event.preventDefault();
  
         // Collect form data
         var formData = new FormData(this);
  
         // For Moves
         var movesData = [];
         document.querySelectorAll('.move-input').forEach(function(input, index) {
         var name = document.getElementById(`move-name-${index}`).value;
         if (name !== ""){
          var frequency = document.getElementById(`move-frequency-${index}`).value;
         var type = document.getElementById(`move-type-${index}`).value;
         var ac = document.getElementById(`move-ac-${index}`).value;
         var damageBase = document.getElementById(`move-damage-base-${index}`).value;
         var range = document.getElementById(`move-range-${index}`).value;
         var damageType = document.getElementById(`move-damage-type-${index}`).value;
         var effect = document.getElementById(`move-effect-${index}`).value;
         movesData.push({ name: name, 
          frequency: frequency, 
          type: type, 
          ac: ac, 
          damageBase: damageBase,
          range: range,
          damageType: damageType,
          effect: effect
        });
        }
          
         
         });

         // For Abilities
         var abilitiesData = [];
         document.querySelectorAll('.ability-input').forEach(function(input, index) {
         var name = document.getElementById(`ability-name-${index}`).value;
         var description = document.getElementById(`ability-description-${index}`).value;
         abilitiesData.push({ name: name, description: description });
         });

         // For Extra Capabilities
         var extraCapabilitiesData = [];
         document.querySelectorAll('.extra-capability-input').forEach(function(input, index) {
         var name = document.getElementById(`extra-capability-name-${index}`).value;
         var description = document.getElementById(`extra-capability-description-${index}`).value;
         extraCapabilitiesData.push({ name: name, description: description });
         });

        //TODO: Convert some sections into tables to format better
        var characterSheet = `
        <div class="character-sheet-container" style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh;">
  <div class="character-sheet" style="width: 800px; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9;">
    <h1>${formData.get('name')}</h1>
    <h2>${formData.get('species')} Level: ${formData.get('level')}</h2>
    <!-- General Section -->
    <div class="section">
      <h2>General</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <ul class="general-list" style="list-style-type: none; padding: 0;">
          <li><strong>Gender:</strong> ${formData.get('gender')}</li>
          <li><strong>Loyalty:</strong> ${formData.get('loyalty')}</li>
          <li><strong>Held Item:</strong> ${formData.get('held-item')}</li>
          <li><strong>Type:</strong> ${formData.get('type1')} / ${formData.get('type2')}</li>
          <li><strong>Weight:</strong> ${formData.get('weight')}</li>
          <li><strong>Height:</strong> ${formData.get('height')}</li>
        </ul>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="section">
      <h2>Stats</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <table style="text-align: center">
          <tr>
            <td><strong>HP:</td>
            <td><strong>Atk:</strong></td>
            <td><strong>Def:</strong></td>
            <td><strong>SpA:</strong></td>
            <td><strong>SpD:</strong></td>
            <td><strong>Spe:</strong></td>
          </tr>
          <tr>
            <td>${formData.get('hp')}</td>
            <td>${formData.get('atk')}</td>
            <td>${formData.get('def')}</td>
            <td>${formData.get('spa')}</td>
            <td>${formData.get('spd')}</td>
            <td>${formData.get('spe')}</td>
          </tr>
          <tr>
            <td><strong>Max HP</strong></td>
            <td><strong>Nature</strong></td>
            <td><strong>Phys Evade</strong></td>
            <td><strong>Spec Evade</strong></td>
            <td><strong>Speed Evade</strong></td>
            <td><strong>Tutor Points</strong></td>
          </tr>
          <tr>
          <td>${formData.get('max-hp')}</td>
          <td>${formData.get('nature')}</td>
          <td>${formData.get('physical-evade')}</td>
          <td>${formData.get('special-evade')}</td>
          <td>${formData.get('speed-evade')}</td>
          <td>${formData.get('tutor-points')}</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="section">
      <h2>Skills</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <ul class="skills-list" style="list-style-type: none; padding: 0;">
          <li><strong>Acrobatics:</strong> ${formData.get('skills[acrobatics]')}</li>
          <li><strong>Athletics:</strong> ${formData.get('skills[athletics]')}</li>
          <li><strong>Combat:</strong> ${formData.get('skills[combat]')}</li>
          <li><strong>Intimidate:</strong> ${formData.get('skills[intimidate]')}</li>
          <li><strong>Stealth:</strong> ${formData.get('skills[stealth]')}</li>
          <li><strong>Survival:</strong> ${formData.get('skills[survival]')}</li>
          <li><strong>General Education:</strong> ${formData.get('skills[general-education]')}</li>
          <li><strong>Medicine Education:</strong> ${formData.get('skills[medicine-education]')}</li>
          <li><strong>Occult Education:</strong> ${formData.get('skills[occult-education]')}</li>
          <li><strong>Pokémon Education:</strong> ${formData.get('skills[pokemon-education]')}</li>
          <li><strong>Technical Education:</strong> ${formData.get('skills[technical-education]')}</li>
          <li><strong>Guile:</strong> ${formData.get('skills[guile]')}</li>
          <li><strong>Perception:</strong> ${formData.get('skills[perception]')}</li>
          <li><strong>Charm:</strong> ${formData.get('skills[charm]')}</li>
          <li><strong>Command:</strong> ${formData.get('skills[command]')}</li>
          <li><strong>Focus:</strong> ${formData.get('skills[focus]')}</li>
          <li><strong>Intuition:</strong> ${formData.get('skills[intuition]')}</li>
        </ul>
      </div>
    </div>

    <!-- Movement Capabilities Section -->
    <div class="section">
      <h2>Movement Capabilities</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <ul class="movement-capabilities-list" style="list-style-type: none; padding: 0;">
        <li><strong>Overland:</strong> ${formData.get('capabilities[overland]')}</li>
        <li><strong>Swim:</strong> ${formData.get('capabilities[swim]')}</li>
        ${formData.get('capabilities[burrow]') === 0 ? '' : "<li><strong>Burrow:</strong> " + formData.get('capabilities[burrow]') + "</li>"}
        ${formData.get('capabilities[sky]') === 0 ? '' : "<li><strong>Sky:</strong> " + formData.get('capabilities[sky]') + "</li>"}
        ${formData.get('capabilities[levitate]') === 0 ? '' : "<li><strong>Levitate:</strong> " + formData.get('capabilities[levitate]') + "</li>"}
        ${formData.get('capabilities[teleporter]') === 0 ? '' : "<li><strong>Teleporter:</strong> " + formData.get('capabilities[teleporter]') + "</li>"}
        </ul>
      </div>
    </div>

    <!-- General Capabilities Section -->
    <div class="section">
      <h2>General Capabilities</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <ul class="general-capabilities-list" style="list-style-type: none; padding: 0;">
        <li><strong>Long Jump:</strong> ${formData.get('capabilities[long-jump]')}</li>
        <li><strong>High Jump:</strong> ${formData.get('capabilities[high-jump]')}</li>
        <li><strong>Power:</strong> ${formData.get('capabilities[power]')}</li>
        </ul>
      </div>
    </div>
    
    <!-- Extra Capabilities Section -->
    <div class="section">
      <h2>Extra Capabilities</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <ul class="extra-capabilities-list" style="list-style-type: none; padding: 0;">
        `;

    extraCapabilitiesData.forEach( (data) => {
        characterSheet += `<li><strong>${data.name}:</strong> ${data.description}</li>`;
    })
    characterSheet += `</ul>
    </div>
    </div>
    <!-- Abilities Section -->
    <div class="section">
      <h2>Abilities</h2>
      <div class="column" style="flex: 1; padding: 0;">
        <ul class="abilities-list" style="list-style-type: none; padding: 0;">`;
    
    abilitiesData.forEach((data) => {
        characterSheet += `<li><strong>${data.name}:</strong> ${data.description}</li>`;
    });

    characterSheet += `    </ul>
    </div>
  </div>

  <!-- Moves Section -->
  <div class="section">
    <h2>Moves</h2>
    <table>
    <tr>
      <td><strong>Name</strong></td>
      <td><strong>Frequency</strong></td>
      <td><strong>AC</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Damage Base</strong></td>
      <td><strong>Damage Type</strong></td>
      <td><strong>Range</strong></td>
    </tr>`;

    movesData.forEach((data) => {
        characterSheet += `
        <tr>
        <td>${data.name}</td>
        <td>${data.frequency}</td>
        <td>${data.ac}</td>
        <td>${data.type}</td>
        <td>${data.damageBase}</td>
        <td>${data.damageType}</td>
        <td>${data.range}</td>
        </tr>
        <tr>
        <td colspan=7>${data.effect}</td>
        </tr>
        `;
    });

    characterSheet += `</table>
    </div>
    </div>
    </div>`;
  
        // Display character sheet in a new window
        var characterSheetWindow = window.open('', '_blank');
        characterSheetWindow.document.open();
        characterSheetWindow.document.write(characterSheet);
        characterSheetWindow.document.close();
    });
});
    

