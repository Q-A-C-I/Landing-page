create table if not exists public.waitlist (
  id bigserial primary key,
  email text not null,
  phone text,
  created_at timestamptz default now()
);
create unique index if not exists waitlist_email_unique on public.waitlist (email);

create table if not exists public.sponsor_contacts (
  id bigserial primary key,
  company text not null,
  contact_name text not null,
  title text,
  email text not null,
  phone text not null,
  website text,
  budget_range text,
  tier text,
  message text,
  created_at timestamptz default now()
);
create unique index if not exists sponsor_contacts_email_unique on public.sponsor_contacts (email);

create table if not exists public.exhibitor_applications (
  id bigserial primary key,
  brand_name text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  country text,
  category text,
  booth text,
  website_instagram text,
  brand_description text,
  hear_about text,
  product_photos_urls jsonb,
  created_at timestamptz default now()
);
create unique index if not exists exhibitor_applications_email_unique on public.exhibitor_applications (email);

create table if not exists public.contestant_applications (
  id bigserial primary key,
  full_name text not null,
  dob date,
  citizenship_country text,
  email text not null,
  phone text not null,
  instagram text,
  education_level text,
  talent_category text,
  story text,
  talent_description text,
  social_links text,
  video_url text,
  portfolio_urls jsonb,
  headshot_url text,
  full_body_url text,
  created_at timestamptz default now()
);
create unique index if not exists contestant_applications_email_unique on public.contestant_applications (email);

do $$
begin
  if not exists (select 1 from storage.buckets where id = 'contestant-assets') then
    insert into storage.buckets (id, name, public) values ('contestant-assets', 'contestant-assets', true);
  end if;
end$$;

do $$
begin
  if not exists (select 1 from storage.buckets where id = 'exhibitor-assets') then
    insert into storage.buckets (id, name, public) values ('exhibitor-assets', 'exhibitor-assets', true);
  end if;
end$$;
