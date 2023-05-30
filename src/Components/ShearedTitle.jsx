

const ShearedTitles = ({heading, subheading}) => {
    return (
        <div className="w-3/12 mx-auto text-center mt-16 ">
            <p className="text-yellow-500 italic border-b-2"><span className="mb-2">--- {subheading} ---</span></p>
            <h2 className="font-bold text-3xl border-b-2 mb-10">{heading}</h2>
            
        </div>
    );
};

export default ShearedTitles;