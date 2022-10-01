import styled from "styled-components";
import { useGetCompaniesQuery } from "~/app/services/company";
import Input from "~/components/lib/Input";
import useCompanies from "~/hooks/useCompaines";

const StyledBrandList = styled.div`
  display: flex;
  flex-direction: column;
  height: 214px;
  row-gap: 10px;
  overflow-y: scroll;
`;

const Brand = () => {
  const { companiesWithProductCounts: companies } = useCompanies();

  return (
    <div>
      <Input placeholder="Search brand" />
      <StyledBrandList>
        {companies?.map((company) => {
          return (
            <div key={company.slug}>
              <span>{company.name}</span>;<span>{company.productCount}</span>
            </div>
          );
        })}
      </StyledBrandList>
    </div>
  );
};

export default Brand;
