var jsonDataEn = {
    /* Navigation */
    "navigation_portfolio": "Portfolio",
    "navigation_about": "About",
    "navigation_contact": "Contact",

    /* About */
    "about_title": "About me",
    "about_text_left": "After almost 5 years as a Software Engineer, I decided to transfer all the skills I learned to a new environment where I wanted to thrive. Facing new challenges and problems and discussing of the infinite ways of solving them is what I loved the most about my job. Although similar in many ways, it requires me to acquire a lot of new skills, and making video games has become my new goal !",
    "about_text_right": "I deeply admire these fantastic creators who have made me travel for thousands of hours, feel countless emotions, and even create relationships. I now aspire to be part of one of these projects myself ! This is why I started developing my own projects using either Unity or GameMaker Studio 2. Making games is hard, it takes a lot of time, it requires to orchestrate a thousands of different pieces together, but most of all it's a lot of fun !",
    "about_cv": "Get my CV !",

    /* Modals Common */
    "modal_about": "About",
    "modal_button_close":  "Close",

    /* Spell System Modal */
    "spell_system_subtitle": "<i>Inspired by Zelda<br />Tears of the Kingdom</i>",
    "spell_system_about_description_top": "In order to develop more advanced and complexe interaction between the player and its environement, we created this mini-project trying to reproduce (in a simplified way) some of the Zelda ToTK Spells. This allowed us to work on the following aspects:",
    "spell_system_about_task_1": "<b>Reverse engineering</b> 4 skills from the game : <i>Ascend</i>, <i>Fuse</i>, <i>Recall</i> and <i>Ultrahand</i>;",
    "spell_system_about_task_2": "Building a <b>modulable</b> and <b>evolutive</b> code baseline, by coding a <i>Spell</i> class foundation using <i>Unity's Scriptable Objects</i> and adding a global <i>Spell Controller</i>;",
    "spell_system_about_task_3": "Adding a basic UI for spell selection;",
    "spell_system_about_task_4": "Developing and adding visual effects to reinforce player's <b>immersion</b>, using Unity's <i>Graph System for Particles</i>, and explored shaders with the <i>Graph System for Shaders</i>, to create electric arcs, trails and outlines effects;",
    "spell_system_about_task_5": "Finally, building an entire scene to highlight each of those developments.",
    "spell_system_about_description_bot": "To learn more about the implementations choices you may refer to the project's <a class='' href='https://github.com/Naikaru/GameDev-SpellSystem' target='_blank'>Github</a>.",
    "spell_system_ascend": "This ability takes the player to a portal leading through surfaces. Various constraints have been implemented for this spell such as basic player movement animation through the portals, raycast checks, and visual effects.",
    "spell_system_fuse_1": "Allow the player to aggregate other entities to its own <i>weapon</i> and create new behaviour and interactions with the environment.",
    "spell_system_fuse_2": "In this exercise, a torch tagged with <i>Fire</i> element is added to our weapon to activate the mechanism to reach the next stage.",
    "spell_system_recall_1": "<i>Recallable</i> objects record their position at a certain frame rate. The <i>recall</i> spell stops the time and then allows the player to retrospecte objects position.",
    "spell_system_recall_2": "The spell activation allows the player to rewind the objects position with different ease-types between those positions.",
    "spell_system_ultrahand_1": "Finally, the <i>ultrahand</i> spell helps the player to create new interactions and structures physics by linking objects together. In this exemple we build a platform allowing the player to use a zipline.",
    "spell_system_ultrahand_2": "The <i>Ultrahand</i> spell is by far the most complexe spell to apprehend. Many improvements can be further realized, such as being able to separate objects previously linked by the spell, a better control of the camera, different directions to join objects together depending on objects faces normals rather than the point of contact, and so on.",

    /* Open World Modal */
    "open_world_description": "A Third Person Open World mini-project introducing me to all different kind of problematics to develop and solve ! Some of the tasks realized in this project :",
    "open_world_task_1": "Implement the <b>UI</b> for the different <b>menus</b> and the <b>inventory</b>;",
    "open_world_task_2": "Architecture the <b>State Machine</b> for the <i>Enemies</i>, using <i>Scriptable Objects</i> allowing for <b>code flexibility and maintainability</b> with respect to the <i>SOLID principles</i>;",
    "open_world_task_3": "Program all the <b>Player Controllers</b> to describe its behaviour and all interaction with its environnement (player inputs, entities, objects, events, ...);",
    "open_world_task_4": "Dive into the Unity's <b>Animator</b> to control our player and enemies animation depending on their states and actions;",
    "open_world_task_5": "Add <i>PNJ</i> and <b>basic quests and dialogs systems</b> based on Unity's Scriptable Objects for modularity and generalized behaviours;",
    "open_world_task_6": "Prepare simple <b>cutscenes</b> to introduce new zones or objectives for the player to reach;",
    "open_world_task_7": "Manipulate Unity's optimizations solutions such as <i>partial scene loading</i> and <i>occlusion culling</i>;",
    "open_world_task_8": "And many more, from adding visual and sound effects, adapt level design, make a save system, allow for player customization...",
    "open_world_github": "Source code is available on <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",
    "open_world_ui_desccription": "A few screeshots to highlight the menus UI that are not shown in the project demo above.",

    /* Tower Defense Modal */
    "tower_defense_description": "Here we developed a very classic tower defense game, to work on wave management, event systems, and overall a better OOP architecture.",
    "tower_defense_task_1": "Simple <b>UI systems</b> to build, upgrade, and sell the turrets;",
    "tower_defense_task_2": "A <b>gold manager</b> that interacts with the player actions and the mob deaths;",
    "tower_defense_task_3": "<b>Basic AI path finding</b> system for the mob to reach the Tower;",
    "tower_defense_task_4": "<b>Waves system</b>, adjustable mob spawning characteristics;",
    "tower_defense_task_5": "Two types of turrets : <i><b>projectiles</b> for burst damage and <b>flamethrower</b> for dps damages</i>;",
    "tower_defense_task_6": "Strong emphasis on <b>design patterns implementation</b> (Factories, Builder, Observers, Object Pooling, ...);",
    "tower_defense_task_7": "Develop our own level builder to design and create our levels faster !",
    "tower_defense_github": "Source code is available on <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",

    /* Survival Horror Modal */
    "survival_horror_description_1": "Heavily inspired by my souvenirs of the Zombie mode from <i>Call of Duty - Black Ops</i> and more specifically by the map <i>Kino Der Toten</i>, but in a 2D fashion !",
    "survival_horror_description_2": "This mini-project helped me learning and improving my 2D programming skills using Gms2 :",
    "survival_horror_task_1": "Designing a 2D map and <b>tile collisions</b> based behaviours;",
    "survival_horror_task_2": "Basic enemy AI chasing behaviour using <i>GameMaker</i> <b>path finding system</b>;",
    "survival_horror_task_3": "Implementing a complete <b>State Machine</b> for the player;",
    "survival_horror_task_4": "Coding a <b>generic gun object for diverse firing behaviours</b>, allowing to control many properties such as knockback, firing cooldown, projectiles number, dispersion, range and speed, automatic shooting, and so on;",
    "survival_horror_task_5": "A simplistic <b>wave system manager</b>, relying on unlocked enemy spawns and a glimpse of randomness to make each run unique !",
    "survival_horror_task_6": "Adding plenty of cool sound and visual effects from talented artists !",
    "survival_horror_github": "Source code is available on <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",

    /* Top Down RPG Modal */
    "topdown_rpg_description": "This first 2D Top-Down RPG project taught us how to build basic behaviours and interactions.",
    "topdown_rpg_task_1": "Programming standard <b>State Machine</b> for our player and enemies behaviours;",
    "topdown_rpg_task_2": "Building a <b>tile based collisions system</b>;",
    "topdown_rpg_task_3": "Adding multiple items thus interactions (bow, axe and pickaxe to throw arrows, chop wood, break rocks);",
    "topdown_rpg_task_4": "Basic <b>dialogs and quests system</b>;",
    "topdown_rpg_task_5": "Displaying basic <b>UI</b> information for items, loots and health;",
    "topdown_rpg_github": "Source code is available on <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",

    /* Footer */
    "footer_contact": "Contact"
}