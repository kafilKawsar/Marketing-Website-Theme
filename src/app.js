
// navber-start -------
document.querySelector("body").setAttribute("class", "");

      document.addEventListener("DOMContentLoaded", function () {
        document
          .getElementById("closeMenuIcon")
          .addEventListener("click", openCloseMenu);
        document
          .getElementById("openMenuIcon")
          .addEventListener("click", openCloseMenu);
        document.querySelector("body").setAttribute("class", "");
      });

      const openMenu = {
        value: false,
      };

      const openCloseMenu = () => {
        openMenu.value = !openMenu.value;
        if (openMenu.value) {
          document.getElementById("mobile-content").classList.toggle("block");
          document.getElementById("mobile-content").classList.toggle("active");
          if (
            document
              .getElementById("mobile-content")
              .classList.contains("active")
          ) {
            document
              .querySelector("body")
              .setAttribute("class", "overflow-hidden");
          } else {
            document.querySelector("body").setAttribute("class", "");
          }
        } else {
          document.getElementById("mobile-content").classList.toggle("block");
          document.getElementById("mobile-content").classList.toggle("active");
          document.querySelector("body").setAttribute("class", "");
        }
      };


      // navber end-------------

      // faq start ---------
      const accordionItemHeaders = document.querySelectorAll(
        ".accordion-item-header"
      );
      
      accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener("click", (event) => {
          // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
          const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
          );
          if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
          ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
          }
          accordionItemHeader.classList.toggle("active");
          const accordionItemBody = accordionItemHeader.nextElementSibling;
          if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
          } else {
            accordionItemBody.style.maxHeight = 0;
          }
        });
      });
      // faq end -----------


      
