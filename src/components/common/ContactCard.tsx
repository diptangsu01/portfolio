type ContactCardProps = {
  title: string;
  value: string;
  url: string;
};

function ContactCard({
  title,
  value,
  url,
}: ContactCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

      <h3 className="text-slate-400">
        {title}
      </h3>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-lg font-semibold text-sky-400 hover:underline"
      >
        {value}
      </a>

    </div>
  );
}

export default ContactCard;