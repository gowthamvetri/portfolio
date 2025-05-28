// components/LeetCode.jsx

const LeetCode = () => {
  return (
    <section className="w-full my-12 px-15 flex flex-col lg:flex-row items-stretch justify-center gap-8 text-white">
         {/* GitHub Card */}
      <div className="flex-1 flex flex-col bg-gray-900/70 rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">GitHub Profile</h2>
        <p className="text-gray-300 mb-6">
          Click the card below to view my full GitHub profile and repositories.
        </p>
        <a
          href="https://github.com/gowthamvetri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 duration-300 w-full flex-1"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=gowthamvetri&show_icons=true&theme=dark"
            alt="Gowtham Vetri's GitHub Stats"
            className="mx-auto rounded-xl shadow-lg w-full"
          />
          <img src="http://ghchart.rshah.org/gowthamvetri" alt="2016rshah's Github chart" className="mx-auto rounded-xl shadow-lg w-full mt-5" />
        </a>
      </div>
      {/* LeetCode Card */}
      <div className="w-full flex-1 flex flex-col bg-gray-900/70 rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">LeetCode Profile</h2>
        <p className="text-gray-300 mb-6">
          Click the card below to view my full LeetCode profile and progress.
        </p>
        <a
          href="https://leetcode.com/Gowtham_Vetri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 duration-300 w-full flex-1"
        >
          <img
            src="https://leetcard.jacoblin.cool/Gowtham_Vetri?theme=dark&font=Noto%20Sans%20Math&ext=heatmap"
            alt="Gowtham Vetri's LeetCode Stats"
            className="mx-auto rounded-xl shadow-lg w-full"
          />
        </a>
      </div>
     
    </section>
  );
};

export default LeetCode;
