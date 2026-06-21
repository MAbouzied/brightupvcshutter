import { SITE } from "@/lib/site";

type PhoneLinkProps = {
  tel: string;
  display: string;
  className?: string;
};

export function PhoneLink({ tel, display, className = "" }: PhoneLinkProps) {
  return (
    <a href={`tel:${tel}`} dir="ltr" className={`phone-ltr ${className}`.trim()}>
      {display}
    </a>
  );
}

type PhoneLinksProps = {
  className?: string;
  linkClassName?: string;
  separator?: string;
};

export function PhoneLinks({
  className = "",
  linkClassName = "",
  separator = " – ",
}: PhoneLinksProps) {
  return (
    <span className={className} dir="ltr">
      {SITE.phones.map((phone, index) => (
        <span key={phone.tel}>
          {index > 0 && separator}
          <PhoneLink tel={phone.tel} display={phone.display} className={linkClassName} />
        </span>
      ))}
    </span>
  );
}
