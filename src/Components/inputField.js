export default function InputField({ name, value, onChange, placeholder, label }) {
    return (
        <div className="m-4">
        {label && <label className=" mb-1 text-sm font-medium text-gray-700">{label}</label>}
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className="border-2 border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
    );
}