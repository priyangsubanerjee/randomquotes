let api = "https://api.quotable.io/quotes";
let quotesContainer = document.getElementById("quotesContainer");
let quotes = [];

const getQuotes = async () => {
  const data = await axios.get(api);
  return data.data.results;
};

const getTemplate = (quote) => {
  const template = `
        <div class="bg-gray-50 hover:shadow-xl hover:shadow-gray-100 hover:border-gray-100 hover:bg-white cursor-pointer border border-[#00000000] transition-all h-full p-4 rounded">
            <p class="text-gray-700 leading-6 text-[12px]">${quote.content}</p>
            <p class='text-right text-[12px] mt-3 text-gray-900 font-medium'>- ${quote.author}</p>
        </div>
    `;

  return template;
};

const populateQuotes = () => {
  quotesContainer.innerHTML = "";
  quotes.map((quote, i) => {
    quotesContainer.innerHTML += getTemplate(quote);
  });
};

window.onload = async () => {
  quotes = await getQuotes();
  populateQuotes();
};
