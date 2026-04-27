export function WF04Username() {
  return (
    <div className="h-full flex flex-col justify-between px-8 py-16 bg-white">
      <div>
        <h2 className="text-3xl mb-3" style={{ fontFamily: 'serif', color: '#333' }}>
          Choose your username
        </h2>
        <p className="text-sm" style={{ color: '#666' }}>
          This is how others will see you. Pick a pseudonym that you feel fits you best.
        </p>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          defaultValue="night_owl_42"
          className="w-full h-16 px-5 text-lg rounded-xl bg-gray-50 border-2 border-gray-300"
          style={{ fontFamily: 'monospace', color: '#333' }}
          readOnly
        />
        <div className="p-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
          <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
            <strong style={{ color: '#333' }}>Privacy first:</strong> We never share your real identity without your consent. Use any username you're comfortable with.
          </p>
        </div>
      </div>
      <button className="w-full h-14 border-2 border-gray-400 rounded-full">
        <span className="text-base text-gray-500">Continue</span>
      </button>
    </div>
  );
}
