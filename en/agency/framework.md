# Collaborative Evolution: The RFC Process

The CARTIO Project was designed under the principles of open source and scientific collaboration. In order for the identity schema to evolve without losing its semantic consistency and lightweight transport footprint, changes suggested by the community follow a model inspired by IETF standards:

---

## 1. The RFC Proposal Flow
Every structural modification — whether the inclusion of a new attribute for search and rescue missions or syntax adjustments — goes through the following phases:

1.  **Proposal Draft**: The developer or researcher proposes the change in the raw schema files (`schema/` folder of the GitHub repository) and submits the code for discussion.
2.  **Experimental Validation**: The change is submitted to the virtual laboratory (using network emulation tools like NetEm) to measure the impact of the new data size under packet loss of up to 40%.
3.  **Schema Review**: The committee evaluates whether the new attribute complies with valence restrictions (avoiding unnecessary multi-values) and maintains backward compatibility.
4.  **Integration and Wiki**: The specification is consolidated and the Schema Wiki is updated to document the new standard for future adopters.

---

## 2. How to Contribute
Developers and researchers interested in improving the project's disaster response capabilities can participate directly by:
*   Accessing the repository at [git.cartio.org](http://git.cartio.org).
*   Opening discussions about new attributes needed in the field.
*   Submitting Pull Requests to correct descriptions in the wiki or propose database schema improvements.