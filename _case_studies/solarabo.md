---
layout: case_study
project_name: solarabo
title: SolarAbo
description: SolarAbo is an offering by Energie Zukunft Schweiz that enables swiss energy suppliers to offer solar power systems to home owners as either lease option or direct purchase. On a white-label platform which hosts an online calculator, interested parties can request offers for both rental and purchase options.
title_image:
  url: solarabo_cover_image.png
  alt: A screenshot from the SolarAbo homepage displayed in a Macbook. It shows an image of a couple that stands closely together in front of their home which has solar panels applied to the roof. Text on the image present the marketing claims, main benefits and the call to action for the offering.
  type: align-right
key_facts:
  - key: Client
    value: Engergie Zukunft Schweiz AG
    logo_url: logo_energie_zukunft_schweiz.svg
  - key: Team size
    value: 4
  - key: Time on project
    value: 11 months
  - key: Solar Systems Leased
    value: 30+
    comment: |
       In the first two months after the launch of the platform, 30 solar systems have already been leased. A total project value of around CHF 500.000.
  - key: Platform reach
    value: 100.000+
    comment: |
       SolarAbo is used by four municipal utilities and reaches over 100,000 customers (as of June 2020).
roles:
  intro: In a team of four, consisting of a project manager and a product developer from the client side (Energie Zukunft Schweiz) and a full-stack developer, I was responsible for the design and its technical implementation in the product.
  role:
    - name: UX/UI Designer
      text: |
        Together with stakeholders of EZS and the lead developer I identified and documented the requirements. Based on this, user flow, wireframes, UI and web design for the main steps of the user journey were created: Landing page, online calculator and offer page. For quick feedback cycles I developed a large part of the design directly in the browser in close cooperation with the stakeholders.
    - name: UI Developer
      text: In a Ruby on Rails web application I implemented the responsive web design. Mainly HTML, CSS and ERB for templating were used. A special challenge was the generation of PDF versions of the offers. These had to be printable and consistent in appearance with the website.
sections:
  - title: Concept and Wireframes
    contents:
      - heading:
        text: |
          Quick sketches in the beginning helped me to align my understanding of the requirements for the website with the stakeholders of EZS. Based on the raw concepts, requirements and initial content designs, I was able to quickly develop wireframes that enabled focused communication, rapid feedback and iteration with stakeholders. Also smaller, mobile devices were taken into account from the beginning. Corresponding drafts illustrate how layout components adapt to smartphone screens, for example.
        images:
          - image_url: solarabo_wireframes.png
            image_alt: The image presents four low-fidelity wireframes of the three main pages of solarabo.
            image_caption: Low-fidelity wireframes for the three main steps of the user journey on the website. Besides getting all stakeholders on the same page regarding the general design direction, they helped to identify content needs e.g. for textual content as well as imagery such as photos an illustrations. The approval of these concepts marked the starting point for further design work.
  - title: Visual Design and Illustration
    contents:
      - heading:
        text: |
          Illustrations help the target group to understand the product. They explain the economic benefits of a photovoltaic system and how it can be installed on the customer's roof in just a few simple steps with SolarAbo.
        images:
          - image_url: solarabo_sketches.png
            image_alt: Drafts for illustrations as hand-drawn pencil sketches.
            image_caption: Quickly created hand-drawn pencil sketches like these helped me to convey my ideas without much effort. When the direction was set and approved I used Adobe Illustrator and Sketch to create the actual illustrations.
      - heading:
        images:
          - image_url: solarabo_process_illustrations.png
            image_alt: Four illustrations that show how users would get from website over on-site visit of solar experts to their own photovoltaic system.
            image_caption: |
              To describe the process how the photovoltaic system would make its way on to the user's roof, I created a series of four illustrations that cover the main steps in the customer journe: Website, on-site visit of installers, construction and eventually the operation of the system.
      - heading:
        images:
          - image_url: solarabo_infographic.png
            image_alt: This image illustrates an example calculation and shows a four person family that lives in a typical house with a certain roof size. The image also shows how the electricity mix is made up of self-produced solar electricity and grid electricity.
            image_caption: Making an example calculation easier to understand by illustrating which factors have an influence on the profitability of the system. This illustration visualizes how a photovoltaic system would work for a typical 4-person family houshold. It illustrates how the electricity mix is made up of self-produced solar electricity and grid electricity.
  - title: Landing page & offer calculator
    contents:
      - heading:
        images:
          - image_url: solarabo_landingpage.png
            image_alt:
            image_caption: |
              **Landing page**

              A one-pager presents the product "SolarAbo", its benefits and how it works.

              The full-screen hero module explains in brief the main advantages of SolarAbo and invites with a call-to-action to create an offer. The format-filling photography is intended to support the message and show the result — the solar system on the roof of a typical home.
              
              The responsive implementation takes this into account by ensuring that this information is almost always visible in full when the page is first loaded, regardless of screen size.
      - heading:
        text:
        images:
          - image_url: solarabo_offer_calculator.png
            image_alt:
            image_caption: |
              **Offer calculator**

              The main functional feature of the SolarAbo website is the offer calculator. Interested users enter the key data of their roof in a six-step form. In addition to the address, roof type, pitch and orientation, the roof surface can be marked on an interactive map. All values together form the basis for the creation of an individual preliminary offer.
              
              Following the natural downwards scrolling path, users are guided step by step through all necessary information. Special attention was paid to the comfortable usability even on smaller devices.
      - heading:
        text:
        images:
          - image_url: solarabo_offer.png
            image_alt:
            image_caption: |
              **The offer**

              Based on the information in the previous calculator, a quotation is created. This communicates in clear figures which possibilities the respective roof offers and at which costs which benefit can be generated.
              
              A detailed explanation of all positions makes the basics of the calculation transparent to users and explains details. Finally, the offer can be requested as a PDF document. Alternatively, an on-site discussion with a consultant is offered.
      - heading:
        text:
        images:
          - image_url: solarabo_offer_pdf.png
            image_alt:
            image_caption: |
              **Lead generation and offer PDF**

              It is only at this point that user data is collected and treated as qualified leads from that point on. The next call-to-action for an on-site consultation appointment is contained in an e-mail and the offer PDF which users will receive once they submit some contact information.
              
              The PDF is generated directly from the online version of the offer and transferred into a printable format using CSS.
---