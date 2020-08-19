---
layout: case_study
project_name: medi
title: medi companion
description: medi companion is an app to support patients with lipedema and lymphedema. The app offers a comprehensive health program that provides indication-specific education, tips on exercise, nutrition and fashion, and explains how to use medical aids.
title_image:
  url: medi_cover_image.png
  alt: A screenshot from the medi companion app displayed in an iPhone. It shows the a part of the app where users can see a chart that tells how long they wore their compression stockings during the previous seven days.
  type: align-bottom
key_facts:
  - key: client
    value: Temedica GmbH
    logo_url: logo_temedica.svg
  - key: Team size
    value: 2-6
  - key: Duration
    value: 2.5 Years
  - key: AppStore Rating
    value: 3.5
  - key: Downloads
    value: 20.000+
roles:
  intro: The app "medi companion" was developed in cooperation with the Bayreuth-based company [medi](https://www.medi.de/en/). The core team consisted of a Product Owner, a lead and a junior fullstack developer. I took on the roles of leading UX/UI designer and UI developer.
  role:
    - name: UX/UI Designer
      text: As a designer he developed first concepts and prototypes, which helped in presentations and sales pitches to initiate the cooperation with medi. Afterwards, together with the product management, I laid the foundations for the development of the actual app and accompanied the product team as a designer in an advisory and leading role.
    - name: Design Lead
      text: |
        I led a team with two other designers (UX/UI and Visual) who took over the further design work of the product based on my original concepts. On the project level I was responsible for the coordination with internal and external stakeholders.
        In later product phases I evaluated the existing product and developed recommendations for improvements of parts of the user journey and individual features.
    - name: UI Developer
      text: |
        In a team with full-stack developers I implemented the interface design into a component-based frontend in Vue.JS. Especially interesting was the development of dynamic SVG illustrations.
        At times I supported the team in the capacities of a product owner, wrote user stories and defined work packages together with the development team.
sections:
  - title: "Getting started: Early Concept, Wireframes & Prototype"
    contents:
      - heading: Concept and screenflows
        text: |
          Functional requirements of the product were defined together with the product manager and stakeholders from the medi GmbH.
          
          An extensive onboarding picks up users in their respective situations and specifically addresses their individual indications. Later, these data form the basis for the individually generated health programme. The health program provides a wide range of content and tips on living with lip and lymphedema. A product assistant helps users with problems in their day-to-day handling of compression products.
        images:
          - image_url: medi_early_concept.png
            image_alt: A screenshot of many low-fidelity, black and white wireframes that show rough concepts of all relevant app parts and features.
            image_caption: |
              Based on the requirements and provided insights from prior research I created this low-fidelity wireframe prototype. Filled with realistic content drafts this artefact gave stakeholders an impression of the user flow in the product to be and ensured alignment about the direction of product development. This prototype went through several iterations in which stakeholder feedback and new findings were taken into account.
  - title: Conversational UI
    contents:
      - heading: Chatbot as product assistant
        text: |
          Perfectly fitting compression is essential in lip and lymphedema therapy. It is therefore important that users are informed about the correct use and care of their compression products.
          medi companion gives users access to a wealth of information that can easily be overwhelming in its scope. Therefore, it is important to keep the content easily accessible and to avoid long searches.
          A clearly structured chatbot dialogue enables this easy access. On the basis of known and frequent problems and information needs, conversation paths have been designed in which users can quickly receive help and advice with short, ready-made answers to concrete questions.
        images:
          - image_url: medi_conversational_ui.png
            image_alt: A screenshot of many medium-fidelity mockups that show screen designs for a chatbot dialogue.
            image_caption: |
              After a period of two weeks users receive a prompt in the app that asks wether the compression product stil fits. When users state that they have a problem, the chatbot provides access to information about common issues.
              When the user's problem is not listed, they are offered to send a message directly to a support representative to seek further help. At the end of the chatbot dialogue a new message appears that invites users to continue with their health programmes.
  - title: Gamification for increased user engagement
    contents:
      - heading: "Core idea: Reaching the goal together"
        text: |
          After a workshop with an external consultant the team (consisting of the product manager, a product developer and myself) developed a gamification concept and story outline which I translated into a paper prototype. This prototype communicated the concept to the stakeholders involved and enabled a constructive dialogue about details and next steps.

          Users will get company of a friendly being who is on its journey to a distant friend. As rewards for consuming the app content, users collect artefacts and items which help their companion to overcome obstacles on the way more easily. Just as the content is intended to help users to master the challenges in their life with the disease.
        images:
          - image_url: medi_game_paper_prototype.png
            image_alt: A flow chart diagram that shows hand-drawn sketches of all screens a user would see on her journey through a part of the gamification story.
            image_caption: |
              After a workshop with an external consultant we developed a concept which I translated into a paper prototype. This conveyed the concept to the stakeholders involved and enabled a constructive dialogue about details and next steps.
      - heading: Implementing the gamification concept
        text: |
          In a team with the project manager and a product developer, I helped to merge the new gamefication elements into the already existing product. We embedded the whole onboarding questionnaire into a dialogue that users have with their selected companion.

          After we had a detailed plan in place, I led a team of a UI designer and a graphic designer that created the interface design and produced lots of illustrations that make up the world in which the story takes place. I focused on planning, directing and stakeholder communication as well on the final production and handover to development.
        images:
          - image_url: medi_gamification_design.png
            image_alt: The image shows screenshots from the gamifaction experience and how we haven woven the game story into the existing user flow. Also there are exmaples from the many illustrations we created for the story that show a part of the game world e.g. a forrest and various items a user can collect to progress in the story.
            image_caption: |
              We managed to keep most of the functional app parts in place and order while weaving the gamification story into the user flow. The game and user interaction with their companions became central to the product's experience.
  - title: Interface Design Evolution
    contents:
      - heading: Leading Design
        text: |
          After laying the conceptual UX groundwork for medi companion I teamed up with two other designers that supported the product team in the areas of interface design and illustration. In a remote setup I led the design team and enabled them to meet our goals through continuous feedback, providing direction where needed and taking care of stakeholder communication.
        images:
          - image_url: medi_design_1.png
            image_alt: 
            image_caption: |
              **Design 1.0**
              The first version of the medi companion was orientated towards medi's corporate design. At the same time, the product was to be given an independent appearance, so that the medi brand would not be overly prominent. Gamification elements form the theme that runs through the app as a red thread.
      - heading:
        images:
          - image_url: medi_design_2.png
            image_alt: 
            image_caption: |
              **Design 2.0**
              In the next development step, we made a shift and decided the app should be clearly recognizable as a product from medi. Above all, the striking magenta which is medi's brand color is now increasingly used against a white background. Prominently used photos bring the medi image world into the app and support brand recognition.
---
