export interface CompanyLogo {
  readonly id: number;
  readonly src: string;
  readonly alt: string;
}

export const COMPANY_LOGOS: readonly CompanyLogo[] = Array.from({ length: 46 }, (_, i) => {
  const id = i + 1;
  const ext = id === 12 || id === 22 ? 'jpg' : 'png';
  return {
    id,
    src: `/images/companies/${id}.${ext}`,
    alt: `Client company ${id} logo`,
  };
});
