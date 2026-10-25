# ZenAI Prep

AI-powered exam preparation and personalized learning platform.

**Website:** https://zenaiassist.com
**Status:** Early development
**Initial Exam:** CELPIP General

## Vision

Help learners prepare for exams through realistic practice,
AI-powered feedback, personalized recommendations,
and measurable progress.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| Authentication | Managed OIDC authentication |
| AI Evaluation | Planned for Sprint 2 |
| Frontend Hosting | Vercel |

## Project Structure

- `apps/web/` — Next.js frontend
- `apps/api/` — FastAPI backend
- `content/celpip/` — CELPIP practice content
- `docs/` — Product and technical documentation
- `infra/` — Local and deployment infrastructure
- `.github/workflows/` — CI/CD configuration

## Documentation

- [Product Vision](docs/01-business/product-vision.md)
- [Product Requirements](docs/02-product/prd.md)
- [System Architecture](docs/03-architecture/system-architecture.md)
- [Database Design](docs/04-database/database-design.md)
- [API Contracts](docs/05-api/api-contracts.md)
- [AI Evaluation Strategy](docs/06-ai-evaluation/evaluation-strategy.md)
- [Security Architecture](docs/07-security/security-architecture.md)
- [Testing Strategy](docs/08-testing/test-strategy.md)
- [Sprint 1](docs/09-operations/sprint-01.md)
- [Domain Migration](docs/09-operations/domain-migration.md)

## Sprint 1 Goal

Deliver the first CELPIP Reading practice workflow:

1. Student authentication
2. Exam selection
3. Timed Reading practice
4. Answer autosave
5. Deterministic scoring
6. Results dashboard

## Development

Local development setup instructions will be added
as the frontend, backend and database are initialized.

## Product Disclaimer

ZenAI Prep is an independent exam preparation product.
It is not affiliated with official examination organizations.

Any AI-generated score estimates are unofficial.

## License

Proprietary — All rights reserved.
