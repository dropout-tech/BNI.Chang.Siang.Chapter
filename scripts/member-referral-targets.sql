ALTER TABLE public.members
ADD COLUMN IF NOT EXISTS referral_targets JSONB NOT NULL DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.members.referral_targets IS '三層引薦對象：good / ideal / dream';

NOTIFY pgrst, 'reload schema';
