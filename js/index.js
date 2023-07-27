function toggleLanguage(language) {
    // Get all language options
    const languageOptions = document.querySelectorAll('.language-option');

    // Loop through each option and set the "active" class based on the selected language
    languageOptions.forEach(option => {
        if (option.getAttribute('data-language') === language) {
            option.classList.add('active');
            console.log('change');
        } else {
            option.classList.remove('active');
        }
    });

}

